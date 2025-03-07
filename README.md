# Daikanyama 密码管理器

Daikanyama是一个安全的密码管理器应用程序，它允许用户通过端到端加密存储和管理敏感信息。

## 项目结构

本项目采用前后端分离的架构：

- `frontend/`：基于Next.js的前端项目，独立管理
- `backend/`：基于Express.js的后端API服务，独立管理

前端和后端是完全独立的项目，各自有自己的依赖和配置，需要分别启动和管理。

## 功能特点

- **加密存储**：所有敏感数据使用主密码通过AES-256进行加密
- **多平台访问**：通过Web界面可以从任何设备访问
- **数据管理**：添加、编辑、删除和查询加密数据
- **类别组织**：通过类别和子类别组织数据
- **安全性**：数据在传输和存储过程中都经过加密

## 技术栈

### 前端

- **框架**：Next.js with React
- **样式**：Tailwind CSS
- **状态管理**：React Hooks
- **HTTP客户端**：Axios

### 后端

- **框架**：Express.js
- **数据库**：SQLite
- **加密**：crypto-js (AES加密)，bcrypt (密码哈希)
- **认证**：JWT (JSON Web Tokens)

## 开始使用

### 前提条件

- Node.js 18.x或更高版本
- npm 9.x或更高版本

### 环境变量配置

项目使用环境变量来配置各种设置。前端和后端都有各自的环境变量配置。

#### 前端环境变量

1. 复制示例配置文件：
   ```
   cp frontend/.env.example frontend/.env.local
   ```

2. 根据需要编辑 `frontend/.env.local` 文件。

主要配置项：
- `NEXT_PUBLIC_API_URL`：后端API的URL

#### 后端环境变量

1. 复制示例配置文件：
   ```
   cp backend/.env.example backend/.env
   ```

2. 根据需要编辑 `backend/.env` 文件。

主要配置项：
- `PORT`：服务器端口
- `JWT_SECRET`：JWT认证密钥
- `ENCRYPTION_KEY`：用于加密敏感数据的密钥
- `DB_PATH`：SQLite数据库文件路径

### 安装与运行

#### 后端

1. 进入后端目录：
   ```
   cd backend
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm run dev
   ```

4. 后端API将在 http://localhost:5000/api 上运行。

#### 前端

1. 进入前端目录：
   ```
   cd frontend
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm run dev
   ```

4. 在浏览器中打开 http://localhost:3000 即可访问应用。

### 开发工作流程

由于前端和后端是独立管理的，开发时需要：

1. 打开两个终端窗口
2. 在一个窗口中启动后端服务
3. 在另一个窗口中启动前端服务
4. 前端将通过环境变量中配置的API URL与后端通信

## 安全说明

- 主密码永远不会存储在服务器上
- 所有敏感数据都使用AES-256加密
- 加密密钥通过PBKDF2从主密码派生
- 使用JWT令牌进行认证

## API端点

### 认证

- `POST /api/auth/register` - 注册新用户
- `POST /api/auth/login` - 用户登录获取认证令牌
- `GET /api/auth/me` - 获取当前认证用户信息

### 类别

- `GET /api/categories` - 获取所有类别
- `POST /api/categories` - 创建新类别
- `GET /api/categories/:categoryId/subcategories` - 获取特定类别的子类别
- `POST /api/categories/:categoryId/subcategories` - 创建新子类别

### 项目

- `GET /api/items` - 获取所有项目（不含加密数据）
- `POST /api/items` - 创建新项目
- `GET /api/items/:itemId` - 获取特定项目的解密数据
- `PUT /api/items/:itemId` - 更新项目
- `DELETE /api/items/:itemId` - 删除项目

## 许可证

本项目采用MIT许可证 - 详见LICENSE文件。 