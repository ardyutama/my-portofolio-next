'use client';
import Image from 'next/image';
import { SectionRevealer } from '@/ui/animation';
import { experiences } from './content';
import { ItemRevealerInView } from '@/ui/animation';

export const ExperienceList = () => {
  return (
    <SectionRevealer className='flex w-full flex-col items-start gap-6'>
      <h3 className='text-2xl font-bold'>
        <span className='text-primary-blue'>Latest</span> Experiences
      </h3>
      <div className='flex flex-col justify-center gap-2'>
        {experiences.map((experience, index) => (
          <ItemRevealerInView key={index}>
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
          </ItemRevealerInView>
        ))}
      </div>
    </SectionRevealer>
  );
};
