'use client';
import { projects } from './content';
import Card from '@/app/features/ui/card/card';
import Circle2 from '@/images/Circle-2.png';
import Image from 'next/image';

export const ProjectList = () => {
  return (
    <section className='relative mx-6 mb-6 flex flex-col items-center gap-6'>
      <Image
        src={Circle2}
        alt='circle2'
        className='absolute -right-10 -z-10 '
      />
      <h2 className='text-3xl font-bold text-primary-blue'>
        Featured <span className='text-black'>Projects.</span>
      </h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projects.map((project, index) => (
          <Card data={project} key={index} />
        ))}
      </div>
    </section>
  );
};
