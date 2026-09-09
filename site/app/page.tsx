"use client";
import { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen, GraduationCap, Mail, MapPin, Moon, Sun } from 'lucide-react';
import { content, sectionIds } from '../lib/content';
export default function Home() {
 const [lang,setLang]=useState<'en'|'zh'>('en');
 const [dark,setDark]=useState(false);
 useEffect(()=>{setLang(localStorage.getItem('homepage-language')==='zh'?'zh':'en');setDark(localStorage.getItem('homepage-theme')==='dark');},[]);
 useEffect(()=>{document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.documentElement.classList.toggle('dark',dark);},[lang,dark]);
 const t=content[lang];
 return <>
  <a className="skip-link" href="#about">{t.skip}</a>
  <header className="site-header"><div className="header-inner">
   <a className="wordmark" href="#about">Zhouyuan Xu<span>.</span></a>
   <nav aria-label={t.navigation}>{sectionIds.map((id,i)=><a key={id} href={'#'+id}>{t.nav[i]}</a>)}</nav>
   <div className="header-actions"><button className="language-button" onClick={()=>{const next=lang==='en'?'zh':'en';setLang(next);localStorage.setItem('homepage-language',next);}} aria-label={lang==='en'?'切换至中文':'Switch to English'}>{lang==='en'?'中文':'EN'}</button><button className="theme-button" onClick={()=>{setDark(!dark);localStorage.setItem('homepage-theme',!dark?'dark':'light');}} aria-label={dark?t.light:t.dark}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button></div>
  </div></header>
  <div className="page-layout">
   <aside className="profile">
    <img className="portrait" src="/portrait.jpg" width="176" height="176" alt="Zhouyuan Xu · 许洲沅"/>
    <div className="profile-name"><h1>Zhouyuan Xu</h1><p className="chinese-name">许洲沅</p></div>
    <p className="profile-role">{t.role}</p>
    <p className="affiliation">{t.department}<br/><a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noreferrer">{t.school}<ArrowUpRight size={14}/></a></p>
    <p className="location"><MapPin size={15}/>{t.location}</p>
    <div className="profile-divider"/>
    <a className="contact" href="mailto:zy-xu23@mails.tsinghua.edu.cn"><Mail size={16}/><span>zy-xu23@mails.tsinghua.edu.cn</span></a>
    <a className="contact github-contact" href="https://github.com/Shimmer0" target="_blank" rel="noreferrer"><ArrowUpRight size={16}/><span>github.com/Shimmer0</span><ArrowUpRight size={14}/></a><p className="eyebrow">{t.interestTitle}</p>
    <div className="interest-list">{t.interests.map(i=><span key={i}>{i}</span>)}</div>
    <a className="profile-link" href="#publications"><BookOpen size={16}/>{t.publications}<ArrowUpRight size={15}/></a>
   </aside>
   <main>
    <section className="panel about-panel" id="about"><div className="section-heading"><h2>{t.about}</h2><span className="section-number">01</span></div><p>{t.intro}</p><p>{t.research}</p><div className="news-block"><h3><span className="news-dot"/>{t.news}</h3><div className="news-row"><time>2026</time><p>{t.update}</p></div></div></section>
    <section className="panel" id="publications"><div className="section-heading"><h2>{t.publications}</h2><span className="section-number">02</span></div>
     <article className="paper featured-paper"><div className="paper-meta"><span className="venue">Findings of EMNLP 2026</span><span className="author-badge">{t.first}</span></div><h3>BlueprintAgent: Constraint-Triggered Targeted Revisits for Simulation-Ready Generation from Scanned Structural Blueprints</h3><p className="authors"><strong>Zhouyuan Xu</strong>, Chen Yang, Linhao Wang, Jiansheng Fan, Chen Wang</p><p className="paper-description">{t.blueprint}</p><div className="paper-bottom"><div className="tags"><span>Multimodal agents</span><span>Structural blueprints</span></div><a className="text-link" href="https://openreview.net/forum?id=RMEDfZygsq" target="_blank" rel="noreferrer">OpenReview<ArrowUpRight size={15}/></a></div></article>
     <article className="paper"><div className="paper-meta"><span className="venue secondary-venue">ICML 2026</span><span className="muted">{t.coauthor}</span></div><h3><a href="https://ssi-bench.github.io/" target="_blank" rel="noreferrer">Thinking in Structures: Evaluating Spatial Intelligence in Constraint-Governed Spaces <ArrowUpRight size={18}/></a></h3><p className="authors">Chen Yang, Guanxin Lin, Youquan He, Peiyao Chen, Guanghe Liu, Yufan Mo, <strong>Zhouyuan Xu</strong>, Linhao Wang, Guohui Zhang, Zihang Zhang, Shenxiang Zeng, Chen Wang, Jiansheng Fan</p><p className="paper-description">{t.ssi}</p><div className="paper-links"><a className="text-link" href="https://arxiv.org/abs/2602.07864" target="_blank" rel="noreferrer">arXiv<ArrowUpRight size={15}/></a><a className="text-link" href="https://ssi-bench.github.io/" target="_blank" rel="noreferrer">{t.projectPage}<ArrowUpRight size={15}/></a></div></article>
     <article className="paper"><div className="paper-meta"><span className="venue secondary-venue">arXiv · 2026</span><span className="muted">{t.preprint}</span></div><h3><a href="https://physmind.github.io/" target="_blank" rel="noreferrer">PhysMind: From Video to Executable Worlds for Training-Free Physical Reasoning <ArrowUpRight size={18}/></a></h3><p className="authors">Chen Yang*, Shenxiang Zeng*, Haoyang Zhao, <strong>Zhouyuan Xu</strong>, Youquan He, Haoyu Li, Mingyi Deng, Jiansheng Fan, Chen Wang</p><p className="paper-description">{t.physmind}</p><div className="paper-links"><a className="text-link" href="https://arxiv.org/abs/2608.04575" target="_blank" rel="noreferrer">arXiv<ArrowUpRight size={15}/></a><a className="text-link" href="https://physmind.github.io/" target="_blank" rel="noreferrer">{t.projectPage}<ArrowUpRight size={15}/></a></div></article>
    </section>
    <section className="panel" id="projects"><div className="section-heading"><h2>{t.projects}</h2><span className="section-number">03</span></div>{t.projectItems.map((p)=><article className="list-item" key={p.title}><div className="item-topline"><h3>{p.title}</h3><time>{p.date}</time></div><p className="item-subtitle">{p.subtitle}</p><p className="item-description">{p.description}</p></article>)}</section>
    <section className="panel" id="awards"><div className="section-heading"><h2>{t.awards}</h2><span className="section-number">04</span></div><div className="award-list">{t.awardItems.map(a=><div className="award-row" key={a.title}><span className="award-dot"/><div><h3>{a.title}</h3><p>{a.subtitle}</p></div><time>{a.date}</time></div>)}</div></section>
    <section className="panel" id="education"><div className="section-heading"><h2>{t.education}</h2><span className="section-number">05</span></div><div className="education-item"><div className="education-icon"><GraduationCap size={24}/></div><div><h3>{t.school}</h3><p>{t.degree}</p></div><time>{t.educationDate}</time></div><p className="advisor">{t.advisor}</p></section>
    <footer><span>© 2026 Zhouyuan Xu</span><span>{t.updated}</span></footer>
   </main>
  </div>
 </>;
}

