# 许洲沅的个人主页

访问：https://shimmer0.github.io/

中英双语主页展示论文、科研项目、荣誉和教育经历。内容在 `site/lib/content.ts`，页面在 `site/app/page.tsx`，样式在 `site/app/globals.css`，头像在 `site/public/portrait.jpg`。

在 `site/` 中运行 `npm ci`、`npm run dev` 可本地预览；运行 `npm run build` 生成 `site/dist/client/`。将生成的首页添加 `layout: null` 的 Jekyll front matter 并用 Liquid raw 包裹，其他静态文件同步到仓库根目录；不要复制 `.nojekyll`，其他原有 Jekyll 页面仍继续构建。

修改并提交到 `master` 后，GitHub Pages 自动更新。`_config.yml` 已允许发布 `_next/` 资源，并排除 `site/` 源码目录。

奖励采用 2026 年 8 月综合考察材料及本人补充，卢谦奖学金为 2025 年；景观浮桥大赛特等奖为 2026 年。教育经历包括本科在读及 2027 年起在樊健生教授指导下直博。
