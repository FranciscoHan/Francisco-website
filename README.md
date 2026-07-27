# 饭壳文化 Francisco Entertainment 官网

## 项目简介
饭壳文化官方网站，专注涉外娱乐经纪，连接中韩娱乐的年轻力量。

## 技术栈
- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- React Router

## 快速开始

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

构建产物在 `dist/` 目录下。

### 预览构建结果
```bash
npm run preview
```

## 部署到阿里云

### 方式一：OSS 静态网站托管（推荐）
1. 创建 OSS Bucket，开启静态网站托管
2. 上传 `dist/` 目录下所有文件到 Bucket 根目录
3. 绑定自定义域名
4. 配置 CDN 加速和 HTTPS 证书

### 方式二：Nginx 部署
```nginx
server {
    listen 80;
    server_name francisco.com.cn;
    root /var/www/francisco/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 项目结构
```
src/
├── components/       # 通用组件
│   ├── ui/          # shadcn 组件
│   ├── Header.tsx   # 导航栏
│   └── Footer.tsx   # 页脚
├── data/            # 数据配置
├── pages/           # 页面
│   └── HomePage/    # 首页各区块
├── lib/             # 工具函数
└── hooks/           # 自定义 hooks
```

## 品牌信息
- 公司名：饭壳文化 Francisco Entertainment
- 主色调：酒红色 #930113
- 创始人：Francisco Han
- 总部：杭州
