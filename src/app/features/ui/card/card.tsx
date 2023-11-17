import Image from 'next/image';
import type { CardProps } from './types';
export default function Card({ data }: CardProps) {
  return (
    <>
      <a
        className='group flex max-w-[350px] snap-center list-none flex-col gap-4 
        rounded-3xl border-[1px] border-[#E5E7EB] bg-white p-6 text-start 
        shadow-card'
        href='#'
      >
        <div className='aspect-[3/2] h-[200px] w-full overflow-hidden rounded-2xl bg-primary-yellow'>
          <div className='relative left-8 top-12 transition-all group-hover:-translate-y-4'>
            {data.photo ? (
              <Image src={data.photo} alt='' className='shadow-card' />
            ) : (
              ''
            )}
          </div>
        </div>
        <p className='text-2xl font-bold'> {data.name} </p>
        <p className='text-xl font-medium'> {data.description} </p>
      </a>
    </>
  );
}
