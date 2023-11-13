import Link from 'next/link';
import GithubIcon from '@/images/github-footer.svg';
import LinkedinIcon from '@/images/linkedin-footer.svg';
import Image from 'next/image';
export default function Footer() {
  return (
    <header className='flex items-center gap-4 bg-black p-7'>
      <nav className='flex items-center gap-6'>
        <Link href='#'>
          <Image src={GithubIcon} alt='Github' />
        </Link>
        <Link href='#'>
          <Image src={LinkedinIcon} alt='Linkedin' />
        </Link>
      </nav>
      <span className='font-medium text-primary-disabled'>
        © 2023 Ardy Putra Utama
      </span>
    </header>
  );
}
