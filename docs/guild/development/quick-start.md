# 一起开发 ReinaManager

## 软件开发

1. Fork 仓库，并从 `main` 分支创建新分支。
2. 如果修复了 bug 或新增了功能，请尽量进行相应测试。
3. 保证代码风格与现有代码一致，并通过相关检查。
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

### 工具链与提交前检查

项目使用 **pnpm** 管理依赖、**Biome** 格式化和检查代码，并使用 **i18next-cli** 维护国际化字符串。完成开发后，请按以下顺序检查。

#### 1. 国际化检查（按需）

若修改或新增了国际化字符串，先按以下流程检查并规范 locale 文件：

1. 查看各语言翻译状态：
   ```bash
   pnpm i18n:status
   ```
2. 若目标语言未达到 100%，查看并补全缺失项：
   ```bash
   pnpm i18n:status en-US --hide-translated
   pnpm i18n:status ja-JP --hide-translated
   pnpm i18n:status zh-TW --hide-translated
   ```
3. 同步并重新提取国际化字符串：
   ```bash
   pnpm i18n:sync
   pnpm i18n:extract
   ```
4. 额外检查 `status` 可能漏报的占位值：
   ```bash
   rg "__MISSING__" src/locales
   ```
5. 若仍有缺失翻译或 `__MISSING__`，修复后从第 1 步重新检查，直至全部通过。

#### 2. 代码规范与类型检查

完成国际化检查后，统一运行：

```bash
pnpm check
```

该命令包含代码格式化、Lint 检查和类型检查，也会格式化国际化流程产生的改动。若未修改国际化字符串，可在代码修改完成后直接运行。

#### 3. Rust 后端检查（按需）

修改 `src-tauri/` 中的 Rust 代码后，运行：

```bash
cd src-tauri
cargo fmt
cargo clippy
```

### 项目结构介绍

- `src/`：前端源代码，包含 React 组件、样式和国际化资源。
- `src-tauri/`：Tauri 相关代码，包含 Rust 后端逻辑。

## 文档开发

1. Fork 仓库，并从 `main` 分支创建新分支。
2. 修改或新增 Markdown 文档内容，确保文档清晰、准确，并符合项目风格。
3. 提交 Pull Request，并清晰描述你的更改内容。

感谢你为 ReinaManager 做出的所有贡献！
