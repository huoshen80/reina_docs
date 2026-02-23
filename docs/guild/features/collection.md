# 收藏夹

收藏夹是 Reina 中用来分类游戏的功能

**注意要先创建分组再创建分类，分类中才能管理游戏，三者关系如下：**

<div align="center">

```mermaid
graph TD
    A[🗂️ 分组 Group] --> B[📁 分类 Category]
    A --> C[📁 分类 Category]
    B --> D[🎮 游戏]
    B --> E[🎮 游戏]
    C --> F[🎮 游戏]

    style A fill:#4f86c6,color:#fff,stroke:#2c5f8a
    style B fill:#5aab72,color:#fff,stroke:#357a4a
    style C fill:#5aab72,color:#fff,stroke:#357a4a
    style D fill:#f0a500,color:#fff,stroke:#b87800
    style E fill:#f0a500,color:#fff,stroke:#b87800
    style F fill:#f0a500,color:#fff,stroke:#b87800
```

</div>

## 默认分组

Reina 自带两个不可编辑的默认分组
![收藏夹分组](https://img0.huoshen80.top/i/2026/01/02/6957b0c3f02c1.png)

#### 开发商分组

- 开发商分组会根据游戏刮削到的开发商信息自动将游戏进行分类

- 虽然你不能直接修改这个分组内的所有内容，但是你可以通过[游戏详情页](editgame.md)修改对应游戏的开发商信息来调整游戏在这个分组中的分类

#### 游戏状态分组

- 游戏状态分组会根据游戏的游玩状态自动将游戏进行分类

- 同开发商分组无法直接编辑，但是可以通过修改游戏状态来调整游戏在这个分组中的分类

## 自定义分类

- 如果想添加自己的分类，可点击右上角按钮先创建新的分组，再创建一个或多个分类，分类下可以管理游戏

- 对于自定义的分组和分类，你可以对着它们右键，右键菜单可以进行重命名和管理游戏的操作。
