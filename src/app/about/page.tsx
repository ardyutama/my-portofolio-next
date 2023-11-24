import { AboutSection } from '@/features/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Ardy Putra Utama',
  description: 'This is about me',
};

export default function About() {
  return <AboutSection />;
}
