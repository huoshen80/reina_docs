# 介绍

ReinaManager 是一个轻量级、易上手的 galgame/视觉小说管理工具

浅色模式：
![library](/images/introduction_20260619_213403.png)

<details>
<summary>深色模式</summary>

  ![library_dark](/images/introduction_20260619_215212.png)

</details>

## 功能特性

- 🌐 **多源数据整合** - 无缝获取并合并来自 VNDB、Bangumi、YmGal 和 KunGal API 的游戏元数据
- 🔍 **强大的搜索** - 通过游戏标题、别名、自定义名称及其他元数据智能搜索游戏
- 🗂️ **筛选排序** - 对游戏进行多维度的筛选和排序，如按来源、状态、标签等
- 📚 **收藏管理** - 通过分组和分类组织游戏库，并支持拖拽排序
- 🎮 **游戏时长追踪** - 自动记录游戏会话，提供详细的游玩时间统计和历史记录
- 🎨 **个性化定制** - 支持自定义游戏封面、名称、简介、标签等信息，打造专属游戏库
- 🔄 **批量操作** - 支持从 API 批量导入、添加和更新游戏元数据
- 🌍 **多语言支持** - 提供完整的国际化支持，包含简体中文、繁体中文、英文、日文等语言
- 🔒 **NSFW 过滤** - 通过简单的开关隐藏或遮盖 NSFW 内容
- 💾 **自动存档备份** - 可选的自动备份功能，保护您的游戏存档
- 🚀 **系统集成** - 开机自启动和最小化到系统托盘
- 🛠️ **工具集成** - 启动游戏可联动 Locale Emulator 转区和 Magpie 放大

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
