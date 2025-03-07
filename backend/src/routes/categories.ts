import { Router } from 'express';
import { authenticate } from '../utils/auth';

const router = Router();

// 获取所有分类
router.get('/', authenticate, (req, res) => {
  res.status(200).json({ message: 'Categories endpoint - To be implemented' });
});

// 创建新分类
router.post('/', authenticate, (req, res) => {
  res.status(201).json({ message: 'Category created - To be implemented' });
});

// 获取特定分类的子分类
router.get('/:categoryId/subcategories', authenticate, (req, res) => {
  res.status(200).json({ message: 'Subcategories endpoint - To be implemented' });
});

// 创建新子分类
router.post('/:categoryId/subcategories', authenticate, (req, res) => {
  res.status(201).json({ message: 'Subcategory created - To be implemented' });
});

export default router; 