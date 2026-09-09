export const sectionIds = ['about','publications','projects','awards','education'];
export const content = {
 en: {
  skip:'Skip to content',navigation:'Main navigation',nav:['About','Publications','Projects','Awards','Education'],light:'Use light theme',dark:'Use dark theme',
  role:'Senior Undergraduate',futureRole:'Incoming Ph.D. Student · 2027',department:'Department of Civil Engineering',school:'Tsinghua University',location:'Beijing, China',interestTitle:'RESEARCH INTERESTS',interests:['Multimodal agents','AI for structural engineering','Physical reasoning'],
  about:'About me',intro:'I am a senior undergraduate in Civil Engineering at Tsinghua University, advised by Prof. Jiansheng Fan. I have been working on intelligent structural design with the group since fall 2024. In 2027, I will begin a direct-entry Ph.D. at Tsinghua University under the supervision of Prof. Jiansheng Fan.',research:'My research connects multimodal agents with structural engineering. I focus on constraint-guided reasoning, automated interpretation of engineering drawings, and the generation, analysis, and optimization of structural designs. I am also interested in physical reasoning and embodied intelligence.',
  news:'News',update:'My first-author paper BlueprintAgent, accepted to Findings of EMNLP 2026, is now available on arXiv.',publications:'Selected publications',first:'First author',accepted:'Accepted',coauthor:'Co-author',ssi:'SSI-Bench evaluates structure-centric spatial reasoning in constraint-governed 3D spaces. My contribution focused on benchmark data annotation.',preprint:'Preprint',blueprint:'An agent that uses engineering constraints to detect conflicts and revisit local drawing evidence, turning scanned structural blueprints into simulation-ready frame models.',physmind:'A training-free framework that turns video into reusable executable worlds for physical prediction and counterfactual reasoning.',projectPage:'Project page',projects:'Projects & experience',
  projectItems:[
   {title:'Multi-agent structural design for data centers',date:'2026–2027',subtitle:'Beijing Natural Science Foundation · Undergraduate Qiyan Program',description:'Research on integrating design generation, analysis, and optimization through graph learning, engineering constraints, and multi-agent collaboration. Project lead; advisor: Prof. Jiansheng Fan.'},
   {title:'Graph learning for intelligent RC frame design',date:'2025–2026',subtitle:'National Undergraduate Innovation & Entrepreneurship Training Program · Project lead',description:'Intelligent design of reinforced-concrete frames for data centers. Also selected for Tsinghua’s Undergraduate Academic Research Advancement Program (Grade A), with an Outstanding Academic Poster award at the interim review.'},
   {title:'Revit automation with PKPM-Agent',date:'Jun–Jul 2026',subtitle:'Research & development internship · PKPM-Agent team',description:'Worked on agent-driven Revit modeling, workflow decomposition, case validation, and reusable skills for engineering software automation.'}
  ],
  awards:'Selected honors & awards',awardItems:[
   {title:'Lu Qian Scholarship',subtitle:'Tsinghua University · Lu Qian Scholarship and Teaching Excellence Fund',date:'2025'},
   {title:'Jiang Nanxiang Scholarship',subtitle:'Tsinghua University',date:'2025'},
   {title:'Comprehensive Excellence Scholarship',subtitle:'Tsinghua University',date:'2023–2025'},
   {title:'National College Student Structural Design Competition',subtitle:'Second Prize · 17th and 18th editions',date:'2024, 2025'},
   {title:'Tsinghua University Structural Design Competition',subtitle:'First Prize · 30th and 31st editions',date:'2024, 2025'},
   {title:'Tsinghua University Landscape Floating Bridge Design Competition',subtitle:'Grand Prize · 5th edition · Team leader',date:'2026'},
   {title:'Engineering Disaster Mitigation Innovation Competition',subtitle:'First Prize · 4th edition · Team leader',date:'2025'},
   {title:'Xinghuo Student Innovation Talent Program',subtitle:'Tsinghua University · 19th cohort',date:'2025'}
  ],education:'Education',degree:'B.Eng. candidate · Civil Engineering',educationDate:'Aug 2023–Present',advisor:'Research advisor: Prof. Jiansheng Fan',phdDegree:'Incoming Ph.D. student · Direct-entry program',phdDate:'From 2027',phdAdvisor:'Ph.D. advisor: Prof. Jiansheng Fan',updated:'Last updated September 2026'
 },
 zh: {
  skip:'跳至正文',navigation:'主导航',nav:['关于','论文','项目','荣誉','教育'],light:'切换浅色模式',dark:'切换深色模式',
  role:'本科四年级',futureRole:'2027 年起 · 直博',department:'土木工程系',school:'清华大学',location:'中国 · 北京',interestTitle:'研究兴趣',interests:['多模态智能体','AI × 结构工程','物理推理'],
  about:'关于我',intro:'我是清华大学土木工程系 2023 级本科生许洲沅，导师为樊健生教授。自 2024 年秋季起，我在课题组开展智能结构设计相关研究。2027 年，我将在清华大学继续攻读博士学位（本科直博），导师为樊健生教授。',research:'我的研究围绕多模态智能体与结构工程的交叉展开，关注工程约束引导的推理、工程图纸的自动理解，以及结构方案的生成、分析与优化。同时，我也关注物理推理与具身智能。',
  news:'近期动态',update:'第一作者论文 BlueprintAgent 已被 Findings of EMNLP 2026 接收，现已在 arXiv 公开。',publications:'代表论文',first:'第一作者',accepted:'已接收',coauthor:'共同作者',ssi:'SSI-Bench 面向受工程约束的真实三维结构，评测视觉语言模型的结构中心空间推理能力。本人参与研究，负责 benchmark 数据标注。',preprint:'预印本',blueprint:'将工程约束转化为可调用的检查工具，定位冲突并触发对局部图纸证据的定向回访，从扫描结构图纸中生成面向力学仿真的框架模型。',physmind:'从视频构建可复用、可执行的世界表示，在无需额外训练的条件下，支持物理预测与反事实推理。',projectPage:'项目主页',projects:'科研项目与实践',
  projectItems:[
   {title:'多智能体协同的数据中心结构设计生成—分析—优化一体化方法研究',date:'2026–2027',subtitle:'北京市自然科学基金 · 青年学生“启研”计划',description:'项目负责人，指导教师为樊健生教授。结合图深度学习、工程约束与多智能体协同，探索贯通结构方案生成、快速分析、优化调整与规范校核的闭环设计方法。'},
   {title:'基于图深度学习的数据中心 RC 框架体系智能设计',date:'2025–2026',subtitle:'国家级大学生创新创业训练计划 · 项目负责人',description:'同期入选清华大学“大学生学术研究推进计划”，项目评级 A，中期审核获评“优秀学术海报”。'},
   {title:'基于 PKPM-Agent 的 Revit 自动化',date:'2026.06–07',subtitle:'研发实习 · PKPM-Agent 项目组',description:'参与智能体驱动的 Revit 建模研发，围绕建模流程拆解、案例验证与可复用 Skill 构建，探索工程软件的智能化操作。'}
  ],
  awards:'主要荣誉与奖励',awardItems:[
   {title:'卢谦励学励教基金奖学金',subtitle:'清华大学',date:'2025'},
   {title:'蒋南翔校长奖学金',subtitle:'清华大学',date:'2025'},
   {title:'综合优秀奖学金',subtitle:'清华大学',date:'2023–2025'},
   {title:'全国大学生结构设计大赛',subtitle:'第 17、18 届 · 国家级二等奖',date:'2024、2025'},
   {title:'清华大学结构设计大赛',subtitle:'第 30、31 届 · 校级一等奖',date:'2024、2025'},
   {title:'清华大学景观浮桥设计大赛',subtitle:'第 5 届 · 校级特等奖 · 队长',date:'2026'},
   {title:'清华大学工程灾害调控创新大赛',subtitle:'第 4 届 · 校级一等奖 · 队长',date:'2025'},
   {title:'“科技创新，星火燎原”学生创新人才培养计划',subtitle:'清华大学 · 第十九期',date:'2025'}
  ],education:'教育经历',degree:'土木工程 · 本科在读',educationDate:'2023.08–至今',advisor:'科研导师：樊健生教授',phdDegree:'博士研究生 · 本科直博（2027 级）',phdDate:'2027 年起',phdAdvisor:'博士生导师：樊健生教授',updated:'更新于 2026 年 9 月'
 }
};
