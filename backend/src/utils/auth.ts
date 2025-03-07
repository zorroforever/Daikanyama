import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { verifyPassword } from './encryption';
import { getDb } from '../models/database';
import { UserJwtPayload } from '../types';

// JWT 密钥，应该从环境变量获取
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-replace-in-production';
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '2h';

// 创建JWT令牌
export function createToken(payload: UserJwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

// 验证JWT令牌
export function verifyToken(token: string): UserJwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserJwtPayload;
  } catch (error) {
    return null;
  }
}

// 身份验证中间件
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Authentication token is required' 
    });
  }
  
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid or expired token' 
    });
  }
  
  // 将用户信息添加到请求对象
  req.user = payload;
  next();
}

// 用户认证
export async function authenticateUser(username: string, password: string): Promise<UserJwtPayload | null> {
  const db = await getDb();
  
  const user = await db.get('SELECT id, username, password_hash FROM users WHERE username = ?', username);
  if (!user) return null;
  
  const isValid = await verifyPassword(password, user.password_hash);
  if (!isValid) return null;
  
  return {
    id: user.id,
    username: user.username
  };
} 