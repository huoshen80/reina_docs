# ReinaManager 文档 

这是 [ReinaManager](https://github.com/huoshen80/ReinaManager/) 的官方文档仓库，旨在帮助用户了解和使用这个轻量级的 galgame/视觉小说管理工具。无论你是新手还是有经验的用户，这里可能都会有你需要的。

本文档基于 [RsPress](https://rspress.rs/) 构建

## 编写文档

1. 确保你已安装 [Node.js](https://nodejs.org/)
2. Fork 并克隆仓库：
   ```bash
   git clone https://github.com/your-username/Reina-docs.git
   cd Reina-docs
   ```
3. 安装依赖：
   ```bash
   pnpm install
   ```
4. 运行开发服务器：
   ```bash
   pnpm dev
   ```
5. 构建生产版本：
   ```bash
   pnpm build
   ```

## 下载页与发布联动

`pnpm dev` 和 `pnpm build` 会先运行 `scripts/prepare-downloads.mjs`，读取 ReinaManager 最新正式 Release，将版本号和各平台安装包地址写入 `docs/_generated/downloads.json`。该文件无需提交，下载页在构建时将它打包，浏览器端不再请求版本信息。获取失败或安装包未上传完成时，命令会报错并停止构建。

系统识别只用于预选下载项。浏览器未明确提供 ARM64 标识时默认选择 x64，用户可手动切换系统、架构和安装包类型。

Windows 默认下载 NSIS 安装包（`-setup.exe`），同时保留 MSI 和便携版入口。

生产部署使用现有的 Cloudflare Pages Git 集成，构建命令应为 `pnpm build`，输出目录为 `doc_build`。发布联动需配置：

1. 在文档站的 Cloudflare Pages 项目中，进入 **Settings → Builds → Add deploy hook**，为 `main` 分支创建 Deploy Hook。
2. 在 **huoshen80/ReinaManager** 仓库的 **Settings → Secrets and variables → Actions** 中，添加名为 `DOCS_DEPLOY_HOOK` 的 Secret，值为上述 Hook URL。不要将 URL 提交到仓库。
3. 主项目的 `release.yml` 会在全部安装包、便携包和 CDN 清单上传成功后触发重建。预发布和非最新正式版本会跳过。文档仓库正常提交仍由 Pages 自动构建。

Hook 请求成功只代表部署已触发，最终构建结果需在 Cloudflare Pages 查看。若触发失败，可在 Release 工作流中重跑 `Rebuild documentation downloads` 任务；若 Pages 构建失败，可在 Pages 中重试部署。

如构建环境遇到 GitHub API 限流，可设置用于读取公开 Release 的 `GITHUB_TOKEN` 环境变量；令牌只在构建脚本中使用，不会写入下载数据。
