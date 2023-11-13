import Circle from '@/images/circle.svg';
import Image from 'next/image';
import Card from '@/ui/card';
import { projects } from './assets/contents/content';
export default function Home() {
  return (
    <main>
      <Image src={Circle} alt='circle' className='absolute' />
      <section className='flex min-h-[90vh] justify-center'>
        <div className='inline-flex flex-col items-center justify-center gap-6 px-12 text-center'>
          <h1 className='text-h3 font-bold'>
            Passionate{' '}
            <span className='font-normal'>
              {' '}
              for Interactive, Impactful, and Great{' '}
            </span>
            Website.
          </h1>
          <h1 className='text-h3 font-bold'>
            10<span className='text-primary-blue'>+</span> Projects.
          </h1>
          <h1 className='text-h3 font-bold'>
            1<span className='text-primary-blue'>+</span> Years in Industry.
          </h1>
          <button className='rounded-3xl bg-gradient-to-r from-primary-blue to-primary-cyan p-4 font-medium text-white'>
            See my work
          </button>
        </div>
      </section>
      <section className='mb-6 flex flex-col items-center gap-6'>
        <h1 className='text-h3 font-bold text-primary-blue'>
          Featured <span className='text-black'>Projects.</span>
        </h1>
        <div className='mx-12 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project, index) => (
            <Card data={project} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
