import { Router } from 'express';
import { login, register, getMe } from '../controllers/authController';
import { authenticate } from '../utils/auth';

const router = Router();

// 注册新用户
router.post('/register', register);

// 用户登录
router.post('/login', login);

// 获取当前用户信息
router.get('/me', authenticate, getMe);

export default router; 