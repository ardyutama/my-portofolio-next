import Photo from '@/images/Photo.png';
import Image from 'next/image';
import Github from '@/icons/github-blue.svg';
import Linkedin from '@/icons/linkedin-blue.svg';
import Donwload from '@/icons/download-white.svg';
import { experiences, techStacks } from './content';
import Link from 'next/link';

export const AboutSection = () => {
  return (
    <section className='my-6 flex w-full justify-center'>
      <div className='flex w-3/4 flex-col items-center'>
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
            priority
          />
        </div>
        <div className='mx-6 flex flex-col items-center gap-4 text-center'>
          <h1 className='text-3xl font-bold'>I’m Ardy.</h1>
          <p className='text-xl font-medium'>
            I’m a Developer that passionate in Software Development based in
            Surabaya, Indonesia.
          </p>
          <div className='flex items-center gap-2'>
            <Link href='https://github.com/ardyutama' target='_blank'>
              <Image src={Github} alt='github' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/ardy-putra-utama/'
              target='_blank'
            >
              <Image src={Linkedin} alt='linkedin' />
            </Link>
          </div>
          <a
            href='https://drive.google.com/file/d/15J012HE4bYpBR6cd2SCr6DK0HvkTtXGK/view?usp=sharing'
            target='_blank'
            className='flex gap-2 rounded-3xl bg-primary-blue p-4 text-xl font-medium text-white'
          >
            <span>Download CV</span>
            <Image src={Donwload} alt='download' />
          </a>
        </div>
        <div className='my-8 flex w-full flex-col items-center gap-6 overflow-hidden rounded-2xl border-[1px] bg-skeleton px-4 py-6'>
          <h3 className='text-2xl font-bold'>
            <span className='text-primary-blue'>Tech</span> Stacks
          </h3>
          <div className='flex w-full animate-slideshow-icon-mobile justify-center gap-6 md:animate-slideshow-icon-desktop'>
            {techStacks.map((techStack) => (
              <div
                className='m-2 flex h-12 w-12 flex-none justify-center rounded-full shadow-md md:h-[64px] md:w-[64px]'
                key={techStack.name}
              >
                <Image
                  src={techStack.icon}
                  alt={techStack.name}
                  className='flex w-6 self-center md:w-8'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex w-full flex-col items-start gap-6'>
          <h3 className='text-2xl font-bold'>
            <span className='text-primary-blue'>Latest</span> Experiences
          </h3>
          <div className='flex flex-col justify-center gap-2'>
            {experiences.map((experience, index) => (
              <ol className='border-l-2 border-primary-yellow' key={index}>
                <li>
                  <div className='flex-start flex items-start'>
                    <div className='-ml-[7px] -mt-2 mr-3 flex h-[12px] w-[12px] flex-none items-start justify-center rounded-full bg-primary-yellow' />
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      className='-mt-1 mr-4 w-8'
                    />
                    <div className='flex flex-col items-start gap-2 self-stretch pb-6'>
                      <div className='gap-0'>
                        <p className='-mt-2 text-base'>
                          {experience.startDate} - {experience.endDate}
                        </p>
                        <p className='text-xl font-bold text-primary-blue'>
                          {experience.position}
                        </p>
                        <p className='text-base font-medium'>
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
