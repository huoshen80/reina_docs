# 快速开始

欢迎使用 ReinaManager！本指南将帮助你快速开始使用这个轻量级的 galgame/视觉小说管理工具。

## 下载安装

1. 访问 [GitHub Releases](https://github.com/huoshen80/ReinaManager/releases) 页面或者 [MSI](https://huoshen80.top/api/reina/lastest/) 和 [MSI CDN](https://huoshen80.top/api/reina/lastest/cdn) 二选一下载安装包
2. 下载适合你操作系统的最新版本：
   - Windows: `.msi`、`.setup.exe` 或 `.zip` 便携包
   - Linux: `.AppImage`、`.deb` 或者 `.rpm` 文件（由[@wind-mask](https://github.com/wind-mask/ReinaManager)维护）

   *PS：x64 和 Arm64 的安装包都有*

3. 安装或解压完成后，启动 ReinaManager，你将看到一个简洁的主页，你可以点击游戏仓库然后开始管理你的游戏库！

## 登录 Bangumi（可选，推荐）
**目前 Bangumi 被墙，无梯子用户可以直接跳过**

<details>
  <summary>我没有注册过 Bangumi</summary>

如果你没有注册过 Bangumi，你需要先注册一个账号：
1. 访问 [Bangumi 注册页面](https://bgm.tv/signup)（如果这个域名无法注册可以尝试[chii.in](https://chii.in/signup)）
2. 填写注册信息并完成注册
3. 注册完成后，直接使用软件内的 `OAUTH 快捷登录` 按钮   

</details>

如果你想从 Bangumi 获取游戏信息、同步游戏状态，你需要登录 Bangumi 账号

点击设置页面内的 `OAUTH 快捷登录` 按钮，然后在浏览器中授权即可

::: warning

你的 Bangumi 账号需要注册满 `60天` 才有访问所有条目的权限，你可以在 Bangumi 个人中心查看账号注册日期
![Bangumi 账号注册时间](/images/quick-start_20260522_174915.png)

:::

## 添加游戏

你有两种方式可以添加游戏：
- 从游戏仓库中点击右上角添加游戏按钮
- 任意页面将游戏的文件夹或者可执行文件拖拽到 ReinaManager 窗口中

推荐使用 Kun 或 Mixed 数据源，在确认游戏名称无误后点击确认按钮开始搜索，然后选择正确的游戏条目完成添加

## 管理游戏

你有两种方式可以管理游戏：
- 鼠标右键游戏卡片打开菜单进行简单管理
- 鼠标单击游戏卡片进入游戏详情页进行更详细的管理

## 启动游戏

- 你可以对着游戏卡片双击鼠标左键启动游戏
- 你可以点击工具栏的启动游戏按钮
- 你还可以鼠标右键，点击启动游戏

## 其他功能

- **搜索：** 在游戏仓库页面使用搜索框快速找到你想要的游戏（支持游戏别名、拼音等）
- **排序、筛选：** 支持最近游玩、添加时间、评分等多种排序方式，支持游戏来源、游戏状态和 Tag 的复合筛选
- **开发商分类：** 在收藏夹页面开发商内自动根据刮削数据对游戏的开发商进行分类
- **分组、分类：** 在收藏夹页面先创建分组，分组内创建分类，进入分类或者右键分类开始管理你的收藏夹
- **批量操作：** 在游戏仓库页面使用批量选择功能对游戏进行批量删除和批量添加至收藏夹等操作

## 软件的外部文件结构

安装版：

``` shell
%AppData%\com.reinamanager.dev
├── backups/            # 游戏存档备份文件夹
├── covers/             # 游戏封面文件夹
└── data/               # 数据库文件夹
    └── backups/        # 数据库备份文件夹
```

便携版：

``` shell
resources
├── backups/            # 游戏存档备份文件夹
├── covers/             # 游戏封面文件夹
└── data/               # 数据库文件夹
    └── backups/        # 数据库备份文件夹  
```

PS：如果需要搬迁除游戏存档外的完整数据，可以在设置中点击`备份数据库`和`备份自定义封面`两个按钮，其中数据库恢复可以直接使用`恢复数据库`按钮

日志文件：

`%LocalAppData%\com.reinamanager.dev\logs\ReinaManager.log`
