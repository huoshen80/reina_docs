import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  plugins: [mermaid()],
  root: path.join(__dirname, 'docs'),
  title: 'ReinaManager',
  description: '一个轻量级的galgame/视觉小说管理工具',
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
