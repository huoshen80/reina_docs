# 介绍

ReinaManager 是一个轻量级、易上手的 galgame/视觉小说管理工具

![library](/images/introduction_20260220_163441.png)

## 功能特性

- 🌐 **多源数据整合** - 无缝获取并合并来自 VNDB、Bangumi 和 YmGal API 的游戏元数据
- 🔍 **强大的搜索** - 通过游戏标题、别名、自定义名称及其他元数据智能搜索游戏
- 📚 **收藏管理** - 使用分层的分组和分类来组织游戏，更好地管理游戏库，支持拖拽排序
- 🎮 **游戏时长追踪** - 自动记录游戏会话，提供详细的游玩时间统计和历史记录
- 🎨 **个性化定制** - 为游戏设置自定义元数据，如封面、名称、标签等，打造个性化游戏库
- 🔄 **批量操作** - 从 API 批量更新游戏元数据
- 🌍 **多语言支持** - 完整的国际化支持，提供多种语言界面，包括中文(简体、繁体)、英文、日文等
- 🔒 **NSFW 过滤** - 通过简单的开关隐藏或遮盖 NSFW 内容
- 💾 **自动存档备份** - 可配置的自动备份功能，保护您的游戏存档数据
- 🚀 **系统集成** - 开机自启动和最小化到系统托盘
- 🎮 **工具集成** - 启动游戏可联动 LE 转区和 Magpie 放大

## 技术栈

| 层级 | 技术 |
|------|------|
| **框架** | [Tauri 2.0](https://tauri.app/) |
| **后端** | [Rust](https://rust-lang.org/) |
| **前端** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **样式** |[Material UI](https://mui.com/material-ui/) + [UnoCSS](https://unocss.dev/)|
| **状态管理** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **数据获取** | [TanStack Query](https://tanstack.com/query/latest) |
| **数据库** | [Sqlite](https://sqlite.org/) + [SeaORM](https://www.sea-ql.org/SeaORM/) |
