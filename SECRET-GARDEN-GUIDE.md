# 🌟 Secret Garden Guide - 秘密花园使用指南

## 📍 如何访问

在学术网站的**右下角**，有一个几乎看不见的 **∞** 符号。
- 默认透明度：5%（几乎不可见）
- 鼠标悬停：60%（会发出紫色霓虹光）
- 点击后：进入你的秘密花园 🌟

## 🎨 设计特色

### 视觉效果
- ✨ **赛博朋克风格**：霓虹灯效果 + 暗黑主题
- 🌌 **粒子系统**：漂浮的光点营造科幻氛围
- 📊 **网格背景**：动态透视网格，增强深度感
- 🔍 **扫描线效果**：模拟CRT显示器质感

### 交互功能
- 🎨 **主题切换**：4种不同配色方案
  - Cyberpunk (青色 + 紫色)
  - Matrix (绿色 + 黄色)
  - Sunset (红色 + 青色)
  - Neon Purple (紫色 + 粉色)
- ✨ **粒子开关**：控制背景粒子效果
- 💥 **故障效果**：触发标题抖动动画
- ⌨️ **键盘彩蛋**：在页面任意位置输入 "hello" 触发彩虹效果

### 动画效果
- **霓虹标题**：闪烁 + 故障抖动
- **打字机效果**：副标题逐字显示
- **卡片光效**：悬停时的扫光动画
- **进度条动画**：技能条平滑展开
- **鼠标跟随**：紫色光圈跟随鼠标移动

## 📝 如何编辑内容

### 编辑个人信息

打开 `_layouts/cyberpunk.html`，找到以下部分：

#### 1. 关于我（About Me）
```html
<div class="card">
  <h2>👤 About Me</h2>
  <p>Hello! 欢迎来到我的秘密花园！</p>
  <p>在这里添加你的个人介绍...</p>
</div>
```

#### 2. 我的兴趣（My Interests）
```html
<div class="card">
  <h2>🎮 My Interests</h2>
  <ul>
    <li>编程与算法</li>
    <li>游戏与动漫</li>
    <!-- 添加更多兴趣 -->
  </ul>
</div>
```

#### 3. 技能展示（Skills & Powers）
```html
<div class="skill-bar">
  <span class="skill-name">Python / Machine Learning</span>
  <div class="progress-container">
    <div class="progress-bar" style="width: 90%;"></div>
  </div>
</div>
```

修改 `width: 90%` 来调整技能等级。

#### 4. 时间线（My Journey）
```html
<div class="timeline-item">
  <h3>2022 - Present</h3>
  <p>Ph.D. Student @ Tsinghua University</p>
  <p>描述你的经历...</p>
</div>
```

## 🎯 高级定制

### 修改主题颜色

在 `_layouts/cyberpunk.html` 的 JavaScript 部分：

```javascript
const themes = [
  { primary: '#00ffff', secondary: '#ff00ff', name: 'Cyberpunk' },
  { primary: '#00ff00', secondary: '#ffff00', name: 'Matrix' },
  // 添加更多主题
];
```

### 调整粒子数量

```javascript
// 初始化粒子数量
for (let i = 0; i < 30; i++) {  // 修改这里的 30
  setTimeout(createParticle, i * 200);
}

// 持续创建粒子的速度
setInterval(createParticle, 1000);  // 修改这里的 1000（毫秒）
```

### 修改隐藏入口的透明度

在 `_layouts/default.html` 中：

```css
.secret-entrance {
  opacity: 0.05;  /* 默认 5% 透明度 */
}

.secret-entrance:hover {
  opacity: 0.6;  /* 悬停时 60% 透明度 */
}
```

### 添加新的交互按钮

在 "Interactive Zone" 部分添加：

```html
<a href="#" class="cyber-button" onclick="yourFunction()">
  🎯 Your Button
</a>
```

然后在 `<script>` 中添加函数：

```javascript
function yourFunction() {
  showMessage('你的功能被触发了！');
  // 添加更多功能...
}
```

## 🎭 彩蛋列表

1. **键盘彩蛋**：输入 "hello" 触发彩虹效果
2. **隐藏卡片**：悬停在 "Secret Message" 卡片上会显示内容
3. **鼠标跟随**：紫色光圈跟随鼠标移动
4. **随机提示**：3秒后会显示随机的使用提示

## 🔧 技术栈

- **纯HTML/CSS/JavaScript**：无需外部依赖
- **CSS动画**：流畅的过渡和关键帧动画
- **Canvas效果**：粒子系统和网格背景
- **响应式设计**：适配所有设备尺寸

## 📱 移动端适配

秘密花园已经针对移动端优化：
- 自动调整字体大小
- 触摸友好的按钮
- 简化的动画效果（减少性能消耗）

## 🚀 性能优化建议

如果动画卡顿，可以：

1. **减少粒子数量**：修改初始化循环
2. **禁用部分效果**：
   ```javascript
   // 禁用粒子
   particlesEnabled = false;

   // 禁用扫描线
   document.querySelector('.scanline').style.display = 'none';
   ```

3. **简化背景**：移除网格背景动画

## 💡 创意建议

你可以添加：
- 🎵 背景音乐播放器
- 🎮 小游戏（如贪吃蛇、打砖块）
- 📊 数据可视化图表
- 🌈 更多主题和配色
- 📝 个人日记/博客功能
- 🎨 画板或涂鸦功能

## 🔐 安全性

- 秘密花园只是隐藏入口，不是密码保护
- 如果需要真正的隐私保护，考虑：
  - 使用HTTP Basic Auth
  - 添加密码验证
  - 使用单独的私有仓库

## 📞 需要帮助？

如果你想要：
- 添加更多功能
- 修改设计风格
- 优化性能
- 解决问题

随时告诉我！我可以继续帮你定制这个秘密花园！ 🌟
