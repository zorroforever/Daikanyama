import CryptoJS from 'crypto-js';
import bcrypt from 'bcrypt';

// Number of rounds for bcrypt
const SALT_ROUNDS = 12;

// Hash the master password using bcrypt (for storage in database)
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

// Verify a password against a hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Derive an encryption key from the master password (for data encryption)
export function deriveEncryptionKey(masterPassword: string): string {
  // Use PBKDF2 to derive a strong key from the password
  // In a production environment, you would use a unique salt per user stored in the database
  const salt = 'daikanyama-static-salt'; // In a real app, this would be a per-user value
  return CryptoJS.PBKDF2(masterPassword, salt, {
    keySize: 256 / 32,
    iterations: 10000
  }).toString();
}

// Encrypt data with the derived key
export function encryptData(plaintext: string, masterPassword: string): string {
  const key = deriveEncryptionKey(masterPassword);
  const encrypted = CryptoJS.AES.encrypt(plaintext, key);
  return encrypted.toString();
}

// Decrypt data with the derived key
export function decryptData(ciphertext: string, masterPassword: string): string {
  try {
    const key = deriveEncryptionKey(masterPassword);
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Failed to decrypt data. The master password may be incorrect.');
  }
} 