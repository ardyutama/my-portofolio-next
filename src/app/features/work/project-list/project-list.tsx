import { projects } from './content';
import Card from '@/app/features/ui/card/card';

export default function ProjectList() {
  return (
    <section className='mb-6 flex flex-col items-center gap-6'>
      <h2 className='text-4xl font-bold text-primary-blue'>
        Featured <span className='text-black'>Projects.</span>
      </h2>
      <div className='mx-12 grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projects.map((project, index) => (
          <Card data={project} key={index} />
        ))}
      </div>
    </section>
  );
}
