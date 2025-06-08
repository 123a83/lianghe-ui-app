# 量合UI - Next.js重构版本

这是一个使用Next.js、TypeScript和Tailwind CSS重构的量合UI界面项目，具有高度的可维护性和可扩展性。

## 🚀 技术栈

- **Next.js 14** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **Font Awesome** - 图标库

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React组件
│   ├── ui/                # 基础UI组件
│   │   ├── StatusBar.tsx
│   │   ├── UserInfo.tsx
│   │   ├── Header.tsx
│   │   ├── Notification.tsx
│   │   ├── StatCard.tsx
│   │   └── RecordCard.tsx
│   ├── sections/          # 页面区块组件
│   │   ├── StatsSection.tsx
│   │   └── RecordsSection.tsx
│   └── layout/            # 布局组件
│       └── BottomActions.tsx
├── lib/                   # 数据和配置
│   └── mockData.ts
├── types/                 # TypeScript类型定义
│   └── index.ts
└── utils/                 # 工具函数
    ├── cn.ts             # 类名合并
    └── format.ts         # 格式化函数
```

## 🎨 设计特性

- **响应式设计** - 适配移动端和桌面端
- **科技感UI** - 渐变背景、光效动画、粒子效果
- **模块化组件** - 高度可复用的组件架构
- **类型安全** - 完整的TypeScript类型定义
- **性能优化** - 组件懒加载、动画优化

## 🛠️ 开发指南

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📱 组件说明

### UI组件 (`src/components/ui/`)
- **StatusBar** - 顶部状态栏（时间、网络、电池）
- **UserInfo** - 用户信息栏
- **Header** - 标题头部区域
- **Notification** - 通知消息组件
- **StatCard** - 统计数据卡片
- **RecordCard** - 记录条目卡片

### 区块组件 (`src/components/sections/`)
- **StatsSection** - 统计数据区块
- **RecordsSection** - 记录列表区块

### 布局组件 (`src/components/layout/`)
- **BottomActions** - 底部操作栏

## 🔧 自定义配置

### 主题色彩
在 `tailwind.config.js` 中定义的主题色：
```javascript
colors: {
  'lianghe': {
    'primary': '#007bff',
    'secondary': '#00ffff', 
    'accent': '#8a2be2',
    'success': '#00ff88',
    'warning': '#ffc107',
  }
}
```

### 自定义动画
在 `globals.css` 中定义了多种科技感动画：
- `pulse-glow` - 发光脉冲效果
- `float` - 浮动效果
- `shimmer` - 光波流动
- `flow` - 背景流动
- `slide-in-right` - 右侧滑入

## 📋 数据类型

项目使用TypeScript定义了完整的数据类型：

```typescript
interface StatCardData {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: string;
  progress: number;
}

interface RecordData {
  id: string;
  type: 'gain' | 'consume';
  amount: number;
  unit: string;
  date: string;
  status: 'completed' | 'processing' | 'pending';
  details?: Record<string, string | number>;
}
```

## 🚀 扩展建议

1. **状态管理** - 可以集成Redux Toolkit或Zustand
2. **API集成** - 添加真实的数据获取接口
3. **路由** - 增加多页面路由支持
4. **国际化** - 添加多语言支持
5. **PWA** - 转换为渐进式Web应用
6. **测试** - 添加Jest和React Testing Library

## �� 许可证

MIT License 