# next-intel-scaffold

基于 Next.js 15 的国际化项目脚手架

这是一个基于[Next.js 15](https://nextjs.org)和[React 19](https://react.dev)构建的项目，使用[`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app)引导创建。

## 技术栈

- **框架**: [Next.js 15](https://nextjs.org)（使用App Router）
- **UI库**: [React 19](https://react.dev)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com)
- **组件**: [Shadcn UI](https://ui.shadcn.com/)和[Radix UI](https://www.radix-ui.com/)
- **类型检查**: [TypeScript](https://www.typescriptlang.org/)
- **表单处理**: [React Hook Form](https://react-hook-form.com/)和[Zod](https://zod.dev/)
- **国际化**: 支持多语言（目前包括英文和中文）

## 主要特性

- 国际化支持（英文/中文）
- 响应式设计，适配各种设备
- 现代化UI界面，基于Shadcn UI和Tailwind CSS
- 使用React Server Components优化性能
- 自带.cursorrules

## 如何使用脚手架

### 方法一：直接克隆

```bash
# 克隆仓库
git clone https://github.com/hfstack/nextjs-intel-scaffold.git your-project-name

# 进入项目目录
cd your-project-name

# 删除 .git 目录（重新初始化 git 仓库）
rm -rf .git
git init

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 方法二：使用内置脚本

```bash
# 克隆仓库
git clone https://github.com/hfstack/nextjs-intel-scaffold.git

# 进入项目目录
cd next-intel-scaffold

# 安装依赖
npm install

# 运行创建项目脚本
npm run create-project
```

脚本会提示你输入新项目的名称、描述和作者信息，然后自动在父目录创建一个新的项目。

## 项目结构

```
next-intel-scaffold/
├── src/
│   ├── app/
│   │   ├── [lang]/      # 国际化路由
│   │   └── globals.css  # 全局样式
│   ├── components/      # UI组件
│   ├── dictionaries/    # 国际化文件
│   └── lib/            # 工具函数和共享逻辑
├── public/             # 静态资源
└── ...配置文件
```

## 国际化支持

本项目使用Next.js App Router的国际化方案:

- 页面放置在`src/app/[lang]`目录下
- 国际化文件放置在`src/dictionaries`目录下
- 支持语言: 英文(en)和中文(zh)

## 自定义你的项目

1. 修改 `package.json` 中的项目信息
2. 更新 `src/dictionaries` 中的国际化文本
3. 根据需要添加或修改 Shadcn UI 组件
4. 开始构建你的应用功能！

## 部署

推荐使用[Vercel平台](https://vercel.com/new)部署此Next.js应用，这是Next.js创建者提供的平台。

更多部署详情，请查看[Next.js部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 了解更多

要了解更多关于Next.js的信息，请查看以下资源:

- [Next.js文档](https://nextjs.org/docs) - 了解Next.js的特性和API
- [Learn Next.js](https://nextjs.org/learn) - 一个交互式Next.js教程

欢迎查看[Next.js GitHub仓库](https://github.com/vercel/next.js)并提供反馈和贡献!
