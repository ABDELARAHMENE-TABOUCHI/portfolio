import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Abdelrahmane Tabouchi | AI & Data Science',description:'Engineering portfolio featuring machine learning, NLP, computer vision and software projects.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
