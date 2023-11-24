import { WorkSection } from '@/features/work';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project - Ardy Putra Utama',
  description: 'This is list of my projects that I already working on',
};
export default function Home() {
  return(
    <>
      <WorkSection />
    </>
  )
    ;
}
