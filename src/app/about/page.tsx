import Photo from '@/images/Photo.svg';
import Image from 'next/image';
import Github from '@/images/github-blue.svg';
import Linkedin from '@/images/linkedin-blue.svg';
import Donwload from '@/images/download-white.svg';
export default function About() {
  return (
    <section className='my-6 flex flex-col items-center'>
      <div
        className='h-[300px] w-[200px] overflow-hidden 
            rounded-tl-[96px] rounded-tr-[96px] bg-gradient-to-b 
            from-primary-blue via-primary-cyan
            to-transparent
            '
      >
        <Image
          src={Photo}
          alt='photo'
          className='mt-8 -translate-x-2 bg-contain bg-center'
        />
      </div>
      <div className='mx-6 flex flex-col items-center gap-4 text-center'>
        <h1 className='text-h2 font-bold'>I’m Ardy.</h1>
        <p className='text-medium-2 font-medium'>
          I’m a Developer that passionate in Software Development based in
          Surabaya, Indonesia.
        </p>
        <div className='flex items-center gap-2'>
          <Image src={Github} alt='github' />
          <Image src={Linkedin} alt='linkedin' />
        </div>
        <a
          href='#'
          className='flex gap-2 rounded-3xl bg-primary-blue p-4 text-medium-3 font-medium text-white'
        >
          <span>Download CV</span>
          <Image src={Donwload} alt='download' />
        </a>
      </div>
      <div className='my-8 w-full bg-skeleton '>
        <div className='flex flex-col py-6 px-4 gap-6 mx-8 border-[1px] items-center rounded-2xl'>
            <h3 className='text-h4 font-bold'><span className='text-primary-blue'>Tech</span> Stacks</h3>
            <div className=''>

            </div>
        </div>
      </div>
    </section>
  );
}
