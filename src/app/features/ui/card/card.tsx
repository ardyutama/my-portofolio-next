'use client';
import Image from 'next/image';
import type { CardProps } from './types';
import Link from 'next/link';

export default function Card({ data }: CardProps) {
  return (
    <>
      <Link
        className='group flex max-w-[280px] snap-center list-none flex-col gap-2 
        rounded-3xl border-[1px] border-[#E5E7EB] bg-white p-6 text-start 
        shadow-card'
        href={data.link}
        target='_blank'
      >
        <div className='flex aspect-[3/2] h-[150px] w-full items-start overflow-hidden rounded-2xl bg-primary-yellow pl-6 pt-6'>
          <div className='relative transition-all group-hover:-translate-y-2'>
            {data.photo ? (
              <Image
                src={data.photo}
                alt=''
                className='max-w-none shadow-card'
                width={250}
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <p className='text-xl font-bold'> {data.name} </p>
        <p className='text-base font-medium'> {data.description} </p>
      </Link>
    </>
  );
}
