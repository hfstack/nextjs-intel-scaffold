# Next-Intel-Scaffold 开发文档

## 脚手架概述

Next-Intel-Scaffold 是一个基于 Next.js 15 和 React 19 的国际化项目脚手架，专为快速启动支持多语言的现代 Web 应用而设计。本脚手架内置了 TypeScript、Tailwind CSS、Shadcn UI 和国际化支持。

## 开发与维护

### 添加新功能

1. 在添加任何新功能前，确保它们是通用的，适合大多数项目使用
2. 保持功能模块化，方便用户移除不需要的部分
3. 更新相关文档和示例

### 添加新组件

1. 将通用组件添加到 `src/components` 目录
2. 确保组件符合项目的设计规范和无障碍要求
3. 为组件添加适当的类型定义和注释
4. 更新组件示例和文档

### 国际化更新

1. 所有国际化文本应放在 `src/dictionaries` 目录中
2. 添加新语言时，确保所有文本都已翻译
3. 保持国际化键的一致性和层次结构

## 版本控制

脚手架采用语义化版本控制：

- **主版本号**：不兼容的 API 变更
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

## 发布流程

### 准备发布

1. 更新 `package.json` 中的版本号
2. 确保所有测试通过
3. 更新 `CHANGELOG.md` 文档

### 发布为 NPM 包 (可选)

如果您计划将脚手架发布为 NPM 包，请按照以下步骤操作：

```bash
# 登录到 npm
npm login

# 发布包
npm publish
```

### 发布为 GitHub 模板 (推荐)

1. 在 GitHub 上创建仓库
2. 推送代码到仓库
3. 在仓库设置中启用"Template repository"选项

## 使用脚手架创建的项目

使用此脚手架创建的项目已经配置好了以下内容：

1. Next.js 15 App Router 架构
2. React 19 服务器组件和客户端组件分离
3. TypeScript 类型安全
4. Tailwind CSS 样式系统
5. Shadcn UI 组件库
6. 完善的国际化方案
7. ESLint 和 TypeScript 配置

## 贡献指南

我们欢迎社区贡献来改进这个脚手架！

### 贡献流程

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

### 贡献准则

- 遵循现有的代码风格
- 添加或更新测试（如适用）
- 更新文档
- 提交前进行本地测试

## 许可证

此脚手架采用 MIT 许可证 - 查看 LICENSE 文件了解详情。 