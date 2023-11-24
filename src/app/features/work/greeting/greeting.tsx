'use client'
import Circle from '@/images/Circle-1.png';
import Image from "next/image"
import { motion } from "framer-motion"

const gradientColors = ['#0367FC', '#80D0C7'];

export const Greeting = () => {
    return (
        <section className='flex min-h-[90vh] justify-center'>
            <Image src={Circle} alt='circle' className='absolute -left-[8rem] w-60' />
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
                <motion.button
                    className='rounded-3xl p-4 font-medium text-white'
                    animate = {{ backgroundColor:[ '#0367FC', '#80D0C7']}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{repeat: Infinity, duration: 1, repeatType: 'mirror'}}
                >
                    See my work
                </motion.button>
            </div>
        </section>
    )
}