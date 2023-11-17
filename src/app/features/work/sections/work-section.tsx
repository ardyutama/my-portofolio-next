import Circle from '@/images/circle.svg';
import Image from 'next/image';
import ProjectList from '../project-list/project-list';

export const WorkSection = () => {
  return (
    <section>
      <Image src={Circle} alt='circle' className='absolute' />
      <section className='flex min-h-[90vh] justify-center'>
        <div className='inline-flex flex-col items-center justify-center gap-6 px-12 text-center'>
          <h1 className='text-5xl font-bold'>
            Passionate{' '}
            <span className='font-normal'>
              {' '}
              for Interactive, Impactful, and Great{' '}
            </span>
            Website.
          </h1>
          <h3 className='text-3xl font-bold'>
            10<span className='text-primary-blue'>+</span> Projects.
          </h3>
          <h3 className='text-3xl font-bold'>
            1<span className='text-primary-blue'>+</span> Years in Industry.
          </h3>
          <button className='rounded-3xl bg-gradient-to-r from-primary-blue to-primary-cyan p-4 font-medium text-white'>
            See my work
          </button>
        </div>
      </section>
      <ProjectList />
    </section>
  );
};
