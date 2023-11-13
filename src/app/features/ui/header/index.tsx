import Navigation from './navigation';
export default function Header() {
  const navs = [
    {
      href: '/',
      name: 'Work',
    },
    {
      href: '/about',
      name: 'About',
    },
  ];
  return (
    <header className='sticky top-0 flex items-center justify-between bg-gradient-to-b from-white from-70% to-transparent p-6 z-10'>
      <span className='bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-h4 font-bold text-transparent'>
        {' '}
        Tama.dev
      </span>
      <nav className='flex items-center gap-6'>
        {navs.map((nav) => (
          <Navigation href={nav.href} title={nav.name} key={nav.name} />
        ))}
      </nav>
    </header>
  );
}
