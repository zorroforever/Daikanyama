import { Router } from 'express';
import { authenticate } from '../utils/auth';

const router = Router();

// 获取所有项目（不含加密数据）
router.get('/', authenticate, (req, res) => {
  res.status(200).json({ message: 'Items endpoint - To be implemented' });
});

// 创建新项目
router.post('/', authenticate, (req, res) => {
  res.status(201).json({ message: 'Item created - To be implemented' });
});

// 获取特定项目的解密数据
router.get('/:itemId', authenticate, (req, res) => {
  res.status(200).json({ message: 'Item details endpoint - To be implemented' });
});

// 更新项目
router.put('/:itemId', authenticate, (req, res) => {
  res.status(200).json({ message: 'Item updated - To be implemented' });
});

// 删除项目
router.delete('/:itemId', authenticate, (req, res) => {
  res.status(200).json({ message: 'Item deleted - To be implemented' });
});

export default router; 