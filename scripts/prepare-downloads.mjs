import { mkdir, writeFile } from 'node:fs/promises';

const repository = 'huoshen80/ReinaManager';
const response = await fetch(
  `https://api.github.com/repos/${repository}/releases/latest`,
  {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    signal: AbortSignal.timeout(30_000),
  },
);

if (!response.ok) {
  const diagnosticHeaders = {};
  for (const name of [
    'x-ratelimit-limit',
    'x-ratelimit-remaining',
    'x-ratelimit-used',
    'x-ratelimit-reset',
    'x-ratelimit-resource',
    'retry-after',
    'x-github-request-id',
  ]) {
    const value = response.headers.get(name);
    if (value !== null) diagnosticHeaders[name] = value;
  }
  const body = await response.text();
  // 只记录是否配置认证，避免将令牌写入构建日志；限制正文长度以免日志过大。
  console.error(
    'GitHub Release API 请求失败：',
    JSON.stringify(
      {
        status: response.status,
        authenticated: Boolean(process.env.GITHUB_TOKEN),
        headers: diagnosticHeaders,
        body: body.slice(0, 4096),
        bodyTruncated: body.length > 4096,
      },
      null,
      2,
    ),
  );
  throw new Error(`获取最新 Release 失败：HTTP ${response.status}`);
}

const release = await response.json();
if (release.draft || release.prerelease || !release.tag_name) {
  throw new Error('下载页只能使用已发布的正式版本');
}

const version = release.tag_name.replace(/^v/, '');
const prefix = `ReinaManager_${version}`;
const files = {
  windows: {
    x64: {
      installer: `${prefix}_x64-setup.exe`,
      msi: `${prefix}_x64_en-US.msi`,
      portable: `${prefix}_win_x64-portable.zip`,
    },
    arm64: {
      installer: `${prefix}_arm64-setup.exe`,
      msi: `${prefix}_arm64_en-US.msi`,
      portable: `${prefix}_win_arm64-portable.zip`,
    },
  },
  linux: {
    x64: {
      appimage: `${prefix}_amd64.AppImage`,
      deb: `${prefix}_amd64.deb`,
      rpm: `ReinaManager-${version}-1.x86_64.rpm`,
    },
    arm64: {
      appimage: `${prefix}_aarch64.AppImage`,
      deb: `${prefix}_arm64.deb`,
      rpm: `ReinaManager-${version}-1.aarch64.rpm`,
    },
  },
};

// 缺少任何一个页面提供的安装包时停止构建，避免部署不完整的下载信息。
for (const architectures of Object.values(files)) {
  for (const packages of Object.values(architectures)) {
    for (const [format, name] of Object.entries(packages)) {
      const asset = release.assets.find((asset) => asset.name === name);
      const expectedUrl = `https://github.com/${repository}/releases/download/${release.tag_name}/${name}`;
      if (
        asset?.state !== 'uploaded' ||
        asset.size <= 0 ||
        asset.browser_download_url !== expectedUrl
      ) {
        throw new Error(`安装包缺失或尚未上传完成：${name}`);
      }
      packages[format] = {
        name,
        url: asset.browser_download_url,
        cdnUrl: `https://gh.huoshen80.top/${asset.browser_download_url}`,
      };
    }
  }
}

const directory = new URL('../docs/_generated/', import.meta.url);
await mkdir(directory, { recursive: true });
await writeFile(
  new URL('downloads.json', directory),
  `${JSON.stringify({ version, releaseUrl: release.html_url, platforms: files }, null, 2)}\n`,
);
console.log(`已生成 ReinaManager ${version} 下载信息`);
