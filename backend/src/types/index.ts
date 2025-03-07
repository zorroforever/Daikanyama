// User model
export interface User {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
}

// Category model
export interface Category {
  id: number;
  user_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

// Subcategory model
export interface Subcategory {
  id: number;
  category_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

// Item model for database storage
export interface Item {
  id: number;
  user_id: number;
  category_id: number;
  subcategory_id: number | null;
  title: string;
  encrypted_data: string;
  created_at: string;
  updated_at: string;
}

// Item data interface for working with decrypted data
export interface ItemData {
  fields: {
    [key: string]: string;
  };
  notes?: string;
}

// Form interfaces for requests
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface CreateItemRequest {
  categoryId: number;
  subcategoryId?: number;
  title: string;
  data: ItemData;
  masterPassword: string;
}

export interface UpdateItemRequest {
  id: number;
  title?: string;
  data?: ItemData;
  masterPassword: string;
}

export interface CreateCategoryRequest {
  name: string;
}

export interface CreateSubcategoryRequest {
  categoryId: number;
  name: string;
}

// Response interfaces
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

// JWT User Payload
export interface UserJwtPayload {
  id: number;
  username: string;
  [key: string]: any;
} 