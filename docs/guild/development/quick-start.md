# 一起开发 ReinaManager

## 软件开发

1. Fork 仓库，并从 `main` 分支创建新分支。
2. 如果修复了 bug 或新增了功能，请尽量进行相应测试。
3. 保证代码风格与现有代码一致，并通过所有检查（如 pnpm check）。
4. 提交 Pull Request，并清晰描述你的更改内容。

### 本地构建与运行项目

1. 确保你已安装 [Node.js](https://nodejs.org/) 和 [Rust](https://www.rust-lang.org/)。
2. 克隆仓库：
   ```bash
   git clone https://github.com/huoshen80/ReinaManager.git
   cd ReinaManager
   ```
3. 安装依赖：
   ```bash
   pnpm install
   ```
4. 运行开发服务器：
   ```bash
   pnpm tauri dev
   ```
5. 构建生产版本：
   ```bash
   pnpm tauri build
   ```

### 代码规范工具

- 项目使用 biome 进行代码格式化和检查，确保你的代码符合规范：
   ```bash
   pnpm check
   ```

### 项目结构介绍

- `src/`: 前端源代码，包含 React 组件、样式和 i18n 国际化资源。
- `src-tauri/`: Tauri 相关代码，包含 Rust 后端逻辑。



## 文档开发

1. Fork 仓库，并从 `main` 分支创建新分支。
2. 修改或新增 markdown 文档内容，确保文档清晰、准确，并符合项目的风格。
3. 提交 Pull Request，并清晰描述你的更改内容。

感谢你为 ReinaManager 做出的所有贡献！
