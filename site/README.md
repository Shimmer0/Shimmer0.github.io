# 许洲沅的个人主页

中英双语学术主页。内容在 `lib/content.ts`，页面在 `app/page.tsx`，样式在 `app/globals.css`，头像在 `public/portrait.jpg`。

使用 Node.js 22.13+。首次运行 `npm ci`，随后 `npm run dev` 预览；`npm run build` 生成可部署到 GitHub Pages 的静态网站，位于 `dist/client/`。

Windows 构建入口对 vinext 的成功退出作兼容处理；构建错误仍返回失败。`zhouyuan-homepage.zip` 是无需构建的静态发布包。静态文件需通过 HTTP 服务访问。

主页包括 EMNLP 2026 Findings 第一作者论文、ICML 2026 合作论文、PhysMind 预印本、科研项目、奖励和教育经历。奖项以 2026 年 8 月综合考察资料及本人补充为准；卢谦奖学金为 2025 年。教育状态保留为本科在读。

现有公开网站：https://shimmer0.github.io/ 。本地制作不会自动更新该网站。
