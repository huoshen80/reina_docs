# 一起开发 ReinaManager

## 开始
欢迎任何形式的贡献！如果你有改进建议、发现了 bug，并希望提交 Pull Request，请按照以下步骤操作：

1. Fork 仓库，并从 `main` 分支创建新分支。
2. 如果修复了 bug 或新增了功能，请尽量进行相应测试。
3. 保证代码风格与现有代码一致，并通过所有检查（如 pnpm check）。
4. 提交 Pull Request，并清晰描述你的更改内容。

## 本地构建与运行项目
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

感谢你为 ReinaManager 做出的所有贡献！

