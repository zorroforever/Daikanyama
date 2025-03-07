import { Request, Response } from 'express';
import { getDb, createDefaultCategories } from '../models/database';
import { hashPassword } from '../utils/encryption';
import { authenticateUser, createToken } from '../utils/auth';
import { RegisterRequest, LoginRequest, ApiResponse } from '../types';

// 用户注册
export async function register(req: Request, res: Response) {
  try {
    const body: RegisterRequest = req.body;
    const { username, password, confirmPassword } = body;
    
    // 验证输入
    if (!username || !password || !confirmPassword) {
      return res.status(400).json<ApiResponse>({
        success: false,
        message: '所有字段都是必填的'
      });
    }
    
    if (password !== confirmPassword) {
      return res.status(400).json<ApiResponse>({
        success: false,
        message: '两次输入的密码不匹配'
      });
    }
    
    if (password.length < 8) {
      return res.status(400).json<ApiResponse>({
        success: false,
        message: '密码长度必须至少为8个字符'
      });
    }
    
    const db = await getDb();
    
    // 检查用户名是否已存在
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', username);
    if (existingUser) {
      return res.status(409).json<ApiResponse>({
        success: false,
        message: '用户名已存在'
      });
    }
    
    // 哈希密码并创建用户
    const passwordHash = await hashPassword(password);
    const result = await db.run(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      [username, passwordHash]
    );
    
    const userId = result.lastID!;
    
    // 为新用户创建默认类别
    await createDefaultCategories(userId);
    
    // 创建认证令牌
    const token = createToken({
      id: userId,
      username
    });
    
    // 返回成功响应
    return res.status(201).json<ApiResponse>({
      success: true,
      message: '用户注册成功',
      data: { userId, username, token }
    });
  } catch (error) {
    console.error('注册错误:', error);
    return res.status(500).json<ApiResponse>({
      success: false,
      message: '注册过程中发生错误'
    });
  }
}

// 用户登录
export async function login(req: Request, res: Response) {
  try {
    const body: LoginRequest = req.body;
    const { username, password } = body;
    
    // 验证输入
    if (!username || !password) {
      return res.status(400).json<ApiResponse>({
        success: false,
        message: '用户名和密码是必填的'
      });
    }
    
    // 认证用户
    const user = await authenticateUser(username, password);
    
    if (!user) {
      return res.status(401).json<ApiResponse>({
        success: false,
        message: '用户名或密码无效'
      });
    }
    
    // 创建认证令牌
    const token = createToken(user);
    
    // 返回成功响应和令牌
    return res.status(200).json<ApiResponse>({
      success: true,
      message: '登录成功',
      data: { userId: user.id, username: user.username, token }
    });
  } catch (error) {
    console.error('登录错误:', error);
    return res.status(500).json<ApiResponse>({
      success: false,
      message: '登录过程中发生错误'
    });
  }
}

// 获取当前用户信息
export function getMe(req: Request, res: Response) {
  try {
    // authenticate中间件已将用户信息添加到req.user
    if (!req.user) {
      return res.status(401).json<ApiResponse>({
        success: false,
        message: '未认证'
      });
    }
    
    return res.status(200).json<ApiResponse>({
      success: true,
      data: {
        id: req.user.id,
        username: req.user.username
      }
    });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    return res.status(500).json<ApiResponse>({
      success: false,
      message: '获取用户信息时发生错误'
    });
  }
} 