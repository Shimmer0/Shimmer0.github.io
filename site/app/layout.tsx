import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Zhouyuan Xu · 许洲沅',
 icons: { icon: '/favicon.svg' },
 description: 'Zhouyuan Xu, undergraduate researcher and incoming 2027 direct-entry Ph.D. student at Tsinghua University, advised by Prof. Jiansheng Fan. Multimodal agents, structural engineering, and physical reasoning. First author of BlueprintAgent, Findings of EMNLP 2026.',
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
