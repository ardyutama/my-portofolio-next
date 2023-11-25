'use client';
import { projects } from './content';
import Card from '@/app/features/ui/card/card';

import { SectionRevealer } from '@/animation/section-revealer';
import { ItemRevealerInView } from '@/ui/animation';
export const ProjectList = () => {
  return (
    <>
      <SectionRevealer
        className='mx-6 mb-6 flex flex-col items-center gap-6 scroll-mt-36'
        id='projects'
      >
        <h2 className='text-3xl font-bold text-primary-blue'>
          Featured <span className='text-black'>Projects.</span>
        </h2>
        <div className='z-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project, index) => (
            <ItemRevealerInView key={index}>
              <Card data={project} />
            </ItemRevealerInView>
          ))}
        </div>
      </SectionRevealer>
    </>
  );
};
