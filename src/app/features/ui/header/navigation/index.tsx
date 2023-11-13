'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'font-bold' : 'font-normal'
      } text-[20px]`}
    >
      {title}
    </Link>
  );
}
