# 🎓 Shimmer0 学术网站

> 0成本个人学术网站 | 数据驱动内容管理 | 双重人格设计

## 📋 项目概述

这是一个基于 **GitHub Pages + Jekyll** 构建的0成本个人学术网站，采用**数据驱动**的内容管理方式，让内容更新无需编写代码。

**网站地址：** https://shimmer0.github.io/

---

## 🌟 核心特性

### 1. 数据驱动管理
- 所有内容存储在 `_data/` 文件夹的YAML文件中
- 只需编辑文本文件即可更新网站
- 无需了解HTML、CSS或JavaScript

### 2. 双重人格设计
- **公开面具**：专业的学术网站（用于会议、期刊、学者认证）
- **真实自我**：隐藏的秘密花园（赛博朋克风格的个人空间）

### 3. 响应式设计
- 完美适配手机/平板/电脑
- 自动HTTPS加密
- 全球CDN加速

---

## 📁 项目结构

```
Shimmer0.github.io/
│
├── 📂 _data/                    # 🎯 所有内容都在这里（用YAML编辑）
│   ├── contact.yml              # 联系方式、社交媒体
│   ├── education.yml            # 教育背景、学位信息
│   ├── experience.yml           # 工作/实习/教学经历
│   ├── research.yml             # 研究兴趣、项目
│   ├── publications.yml         # 所有发表作品
│   └── awards.yml               # 获奖与荣誉
│
├── 📂 _layouts/                 # 页面模板（无需编辑）
│   ├── default.html             # 学术网站默认布局
│   ├── home.html                # 首页布局
│   ├── page.html                # 普通页面布局
│   └── cyberpunk.html           # 秘密花园布局
│
├── 📂 _includes/                # 页面组件
│   └── secret-link.html         # 隐藏入口组件
│
├── 📂 assets/                   # 静态资源
│   └── img/                     # 图片文件
│       └── favicon.svg          # 网站图标
│
├── 📄 index.md                  # 首页（自动生成）
├── 📄 cv.md                     # CV页面（自动生成）
├── 📄 research.md               # 研究页面（自动生成）
├── 📄 publications.md           # 发表作品页面（自动生成）
├── 📄 contact.md                # 联系页面（自动生成）
├── 📄 secret-garden.md          # 秘密花园页面
│
├── 📄 _config.yml               # Jekyll配置文件
├── 📄 Gemfile                   # Ruby依赖
├── 📄 .gitignore                # Git忽略文件
├── 📄 CLAUDE.md                 # Claude Code项目说明
└── 📄 README.md                 # 本文件
```

---

## 🚀 快速开始

### 如何更新网站内容？

所有内容都存储在 `_data/` 文件夹中，只需编辑对应的YAML文件即可。

#### 方法1：在GitHub网页上编辑（最简单）

1. 访问 https://github.com/Shimmer0/Shimmer0.github.io
2. 进入 `_data` 文件夹
3. 点击要编辑的 `.yml` 文件
4. 点击右上角的铅笔图标 ✏️
5. 编辑内容
6. 点击 "Commit changes"
7. 等待1-2分钟，网站自动更新

#### 方法2：在本地编辑

1. 用任何文本编辑器打开 `_data/` 下的文件
2. 编辑内容
3. 保存后提交到Git：
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```

---

## 📝 内容编辑指南

### 数据文件说明

| 文件 | 内容 | 更新时机 |
|------|------|----------|
| `contact.yml` | 姓名、邮箱、单位、社交链接 | 更新联系方式 |
| `education.yml` | 学位、学校、论文信息 | 添加新学位 |
| `experience.yml` | 工作、实习、教学经历 | 添加新职位 |
| `research.yml` | 研究兴趣、项目 | 更新研究方向 |
| `publications.yml` | 所有发表作品 | 添加新论文 |
| `awards.yml` | 获奖与荣誉、专业服务 | 添加新奖项 |

### 编辑示例

#### 添加发表作品

编辑 `_data/publications.yml`：

```yaml
journal_papers:
  - title: "Your Paper Title"
    authors: "Your Name, Co-author Name"
    venue: "Journal Name"
    year: 2025
    volume: "10"
    issue: "2"
    pages: "100-110"
    doi: "https://doi.org/10.xxxx/xxxxx"
    pdf: "/files/paper.pdf"
    highlight: true
```

#### 添加教育背景

编辑 `_data/education.yml`：

```yaml
education:
  - degree: "Ph.D."
    major: "Computer Science"
    institution: "Tsinghua University"
    location: "Beijing, China"
    start_date: "2022-09"
    end_date: "Present"
    thesis: "Your Thesis Title"
    advisor: "Prof. Advisor Name"
```

#### 更新联系方式

编辑 `_data/contact.yml`：

```yaml
name: "Shimmer0"
email: "zy-xu23@mails.tsinghua.edu.cn"
affiliation:
  institution: "Tsinghua University"
  department: "Department Name"
  position: "Ph.D. Student"
```

---

## 💡 YAML语法快速参考

```yaml
# 这是注释

# 简单值
name: "值"

# 列表
items:
  - "项目1"
  - "项目2"
  - "项目3"

# 嵌套结构
person:
  name: "张三"
  email: "zhangsan@example.com"
  location: "北京"
```

**重要提示：**
- 保持缩进和结构
- 以 `-` 开头的行表示列表项
- 用 `#` 注释掉不需要的内容（而不是删除）
- 网站在保存后1-2分钟内更新

---

## 🌈 秘密花园（Secret Nexus）

### 访问方式

在学术网站的**右下角**，有一个几乎看不见的 **⬢** 符号。
- 默认透明度：3%（几乎不可见）
- 鼠标悬停：100%显示 + 霓虹发光 + 360度旋转
- 点击后：进入你的秘密花园 🌟

**直接访问：** https://shimmer0.github.io/secret-garden/

### 特色功能

#### 视觉效果
- ✨ 赛博朋克风格设计
- 🌌 粒子系统 + 动态网格背景
- 🎨 4种主题配色切换
- 💎 毛玻璃卡片 + 流光边框
- 🖱️ 自定义霓虹光标

#### 交互功能
- 🎨 主题切换（Cyber/Matrix/Synthwave/Solar Flare）
- 💥 故障效果触发
- 🎹 键盘彩蛋（输入 "hello" 触发彩虹模式）
- 📊 HUD能量条动画

### 如何编辑秘密花园

编辑 `_layouts/cyberpunk.html` 文件中的内容：

#### 修改关于我
```html
<article class="cyber-panel panel-about">
  <h2 class="panel-title">SYS.INFO // ABOUT_ME</h2>
  <p>欢迎来到我的秘密花园...</p>
</article>
```

#### 修改技能展示
```html
<div class="hud-skill">
  <div class="hud-skill-header">
    <span>MACHINE_LEARNING</span>
    <span>90%</span>
  </div>
  <div class="hud-track" data-level="9"></div>
</div>
```

#### 修改兴趣标签
```html
<div class="cyber-tag"># AI_Architecture</div>
<div class="cyber-tag"># Cyber_Security</div>
```

---

## 🎨 网站图标

网站图标位于 `assets/img/favicon.svg`，是一个SVG格式的学术帽图标。

如需更换：
1. 替换 `assets/img/favicon.svg` 文件
2. 或使用在线工具生成：https://realfavicongenerator.net/

---

## ❓ 常见问题

### Q: 如何隐藏某些内容？
A: 在YAML文件中用 `#` 注释掉：
```yaml
# - title: "不想显示的论文"
```

### Q: 如何添加多个项目？
A: 使用 `-` 创建列表项：
```yaml
awards:
  - title: "奖项1"
    year: 2023
  - title: "奖项2"
    year: 2024
```

### Q: 如果我改错了怎么办？
A: 别担心！你可以在GitHub上查看历史记录并恢复更改。网站不会永久损坏。

### Q: 网站更新需要多久？
A: 通常1-2分钟。GitHub Pages会自动重新构建网站。

---

## 🔧 开发命令

如果需要在本地预览网站（可选）：

```bash
# 安装依赖（需要Ruby和Bundler）
bundle install

# 运行本地开发服务器
bundle exec jekyll serve

# 构建生产版本
bundle exec jekyll build
```

---

## 📚 技术栈

| 技术 | 用途 |
|------|------|
| **GitHub Pages** | 0成本托管平台 |
| **Jekyll** | 静态网站生成器 |
| **YAML** | 数据文件格式 |
| **CSS3** | 样式和动画 |
| **JavaScript** | 交互功能 |

---

## 🎯 未来扩展

当需要时，可以轻松添加：

- 📝 博客功能（创建 `_posts/` 文件夹）
- 🌐 自定义域名（在GitHub设置中绑定）
- 📊 Google Analytics（在 `_config.yml` 中添加）
- 🎵 背景音乐播放器
- 🎮 小游戏功能
- 📈 数据可视化图表

---

## 📞 需要帮助？

- 查看每个数据文件中的示例模板（用 `#` 注释）
- 访问GitHub仓库：https://github.com/Shimmer0/Shimmer0.github.io
- Jekyll官方文档：https://jekyllrb.com/docs/

---

## 📅 更新日志

- **2025-03-19**: 添加网站图标，整合文档
- **2025-03-07**: 完成秘密花园视觉重构（Bento Grid + HUD界面）
- **2025-03-07**: 创建秘密花园（赛博朋克风格）
- **2025-03-07**: 实现数据驱动内容管理
- **2025-03-07**: 初始网站搭建

---

## 📄 许可证

本项目采用 MIT 许可证。

---

**Made with ❤️ by Shimmer0**
