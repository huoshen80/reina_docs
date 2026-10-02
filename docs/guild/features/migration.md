# 从其它管理器迁移

使用 [Reina Migrator](https://github.com/huoshen80/reina_migrator) 从 WhiteCloud 或 Playnite 迁移游戏，支持 ReinaManager 安装版和[便携版](portable.md)。

## 准备工作

1. 使用 ReinaManager **v0.29.1 或以上版本**，至少启动一次以创建数据库，保存后退出。
2. 下载并解压[最新版迁移工具](https://github.com/huoshen80/reina_migrator/releases/latest)。

## WhiteCloud

适用于 **WhiteCloud v0.4.0 数据库结构**。

### 操作步骤

1. 退出 WhiteCloud，找到 `WhiteCloud 安装目录\resources\data\db.3.sqlite`。
2. 将 `db.3.sqlite` **复制**到 `reina_migrator.exe` 所在文件夹。
3. 运行 `reina_migrator.exe`，输入 `1` 或按 Enter 选择 WhiteCloud，再按[完成迁移](#完成迁移)操作。

### 迁移内容

- 名称、游戏目录、启动文件和存档路径。
- 游玩记录、累计时长、游玩次数和每日统计。

新游戏统一设为「想玩」，其他资料可在[游戏详情页](editgame.md)补充。

同一启动项的记录会合并去重。已有游戏可补充空的存档路径，来源路径有冲突时跳过。

## Playnite

适用于 **Playnite 10**，需用 Reina Exporter 插件导出游戏库。

### 操作步骤

1. 下载 [Reina Exporter](https://github.com/huoshen80/Reina-Playnite-Exporter/releases/latest) 的 `.pext` 文件。
2. 将文件拖入 Playnite **桌面版**窗口，安装后重启 Playnite。
3. 选择主菜单中的 `扩展 → Export library for ReinaManager`，保存 JSON 文件。
4. 运行 `reina_migrator.exe`，输入 `2` 选择 Playnite，再选择导出的 JSON。
5. 按[完成迁移](#完成迁移)操作。

也可按迁移工具仓库中 `Reina-Playnite-Exporter/README.zh-CN.md` 的说明构建插件。

**迁移完成前请保留 Playnite 数据目录和封面文件**。跨电脑迁移时，需确保 JSON 中的游戏和封面路径仍然有效。

### 迁移内容

- 名称、排序名称（转为别名）、简介、开发商、评分、备注（转为用户评价）和成人标记。
- 标签、类型、分类和平台（合并为标签）。
- 发行日期、添加时间、修改时间和游玩状态。
- Steam AppID、本地游戏目录和启动文件。
- 累计时长、游玩次数、最近游玩时间和封面。

状态对应关系：

| Playnite 状态 | ReinaManager 状态 |
| --- | --- |
| Not Played、Plan to Play | 想玩 |
| Played、Beaten、Completed | 玩过 |
| Playing | 在玩 |
| On Hold | 搁置 |
| Abandoned | 弃坑 |
| 其他自定义状态 | 想玩 |

### 迁移限制

- 只迁移累计统计，不含历史单次记录和每日时长。后续按单次记录重建统计时，导入的累计数据可能被清除。
- 不迁移启动参数。无法转换启动项的游戏仍会导入资料，需手动设置启动文件。
- 封面会复制到 ReinaManager；复制失败不影响游戏资料导入，原因见日志。

## 完成迁移

1. 选择 ReinaManager 版本：
   - **安装版：** 输入 `1` 或按 Enter，自动查找数据库。
   - **便携版：** 输入 `2`，选择 `ReinaManager.exe` **所在文件夹**。
2. 如提示 ReinaManager 正在运行，保存并退出后按 Enter 重试；输入 `0` 可取消迁移。
3. 工具会先备份数据库，再迁移。备份优先使用设置中的目录；未设置、目录无效或备份失败时，保存到数据库同目录下的 `backups` 文件夹。
4. 完成后按 Enter 退出，启动 ReinaManager 查看结果。

## 重复游戏与日志

- 按 Steam AppID 或「游戏目录 + 启动文件」匹配已有游戏；匹配到多个条目时跳过。
- 已有游戏仅在无单次记录、累计时长和次数均为空或为零时补充游玩数据。
- 缺少 Steam AppID 和完整启动路径的游戏，再次迁移可能重复导入。

日志保存在迁移工具所在文件夹，记录迁移结果、跳过原因和错误。
