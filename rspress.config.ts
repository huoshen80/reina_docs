import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  plugins: [mermaid()],
  root: path.join(__dirname, 'docs'),
  title: 'ReinaManager - galgame/视觉小说管理工具',
  description:
    '一款由 Tauri 2.0 驱动的轻量级、易上手、高性能、跨平台 galgame/视觉小说管理工具，为您提供高效便捷的游戏管理体验~',
  icon: '/reina-icon.png',
  logo: '/reina-icon.png',
  logoText: 'ReinaManager',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/huoshen80/ReinaManager',
      },
    ],
  },
});
