import { useEffect, useState } from 'react';
import downloads from '../_generated/downloads.json';
import './download.css';

type Platform = 'windows' | 'linux';
type Architecture = 'x64' | 'arm64';
type Package = { name: string; url: string; cdnUrl: string };

const formats = {
  windows: { installer: '安装版', msi: 'MSI', portable: '便携版' },
  linux: { appimage: 'AppImage', deb: 'DEB', rpm: 'RPM' },
};

export default function Download() {
  const [platform, setPlatform] = useState<Platform>('windows');
  const [architecture, setArchitecture] = useState<Architecture>('x64');
  const [format, setFormat] = useState('installer');
  const [detection, setDetection] = useState('请选择系统和架构后下载。');

  useEffect(() => {
    const agent = navigator.userAgent;
    if (/Android|iPhone|iPad|iPod/i.test(agent)) {
      setDetection('当前设备暂无安装包，可以选择电脑使用的系统下载。');
      return;
    }
    const detected = /Windows/i.test(agent)
      ? 'windows'
      : /Linux/i.test(agent)
        ? 'linux'
        : null;
    if (!detected) {
      setDetection('未识别到受支持的系统，请手动选择下载版本。');
      return;
    }
    setPlatform(detected);
    setFormat(detected === 'windows' ? 'installer' : 'appimage');
    const arm = /aarch64|arm64/i.test(agent);
    setArchitecture(arm ? 'arm64' : 'x64');
    setDetection(
      `已识别 ${detected === 'windows' ? 'Windows' : 'Linux'}；${arm ? '已选择 ARM64' : '默认选择 x64，如使用 ARM 设备请手动切换'}。`,
    );
  }, []);

  const packages: Record<string, Package> =
    downloads.platforms[platform][architecture];
  const selected = packages[format];
  const platformName = platform === 'windows' ? 'Windows' : 'Linux';
  const formatName = Object.entries(formats[platform]).find(
    ([value]) => value === format,
  )?.[1];

  return (
    <section className="reina-download" aria-label="下载安装包">
      <div className="reina-download-header">
        <span className="reina-download-version">
          <span className="reina-download-dot" />
          最新正式版 <strong>v{downloads.version}</strong>
        </span>
        <a
          className="reina-download-release"
          href={downloads.releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          更新内容 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <h2 className="reina-download-title">{platformName} 版</h2>
      <p className="reina-download-summary">
        {architecture === 'x64' ? 'x64' : 'ARM64'}
        <span aria-hidden="true"> / </span>
        {formatName}
      </p>
      <div className="reina-download-options">
        <fieldset>
          <legend>系统</legend>
          <div className="reina-download-segments">
            {(['windows', 'linux'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={platform === value}
                onClick={() => {
                  setPlatform(value);
                  setFormat(value === 'windows' ? 'installer' : 'appimage');
                }}
              >
                {value === 'windows' ? 'Windows' : 'Linux'}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>架构</legend>
          <div className="reina-download-segments">
            {(['x64', 'arm64'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={architecture === value}
                onClick={() => setArchitecture(value)}
              >
                {value === 'x64' ? 'x64' : 'ARM64'}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>类型</legend>
          <div className="reina-download-segments">
            {Object.entries(formats[platform]).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={format === value}
                onClick={() => setFormat(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="reina-download-actions">
        <a
          className="reina-download-primary"
          href={selected.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
          </svg>
          下载 {platformName} 版
        </a>
        <a
          className="reina-download-secondary"
          href={selected.cdnUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          备用下载 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="reina-download-filename">{selected.name}</p>
      <p className="reina-download-detection" role="status">
        {detection}
      </p>
    </section>
  );
}
