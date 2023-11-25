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
    <header className='sticky top-0 z-20 bg-gradient-to-b from-white from-80% to-transparent'>
      <div className='flex items-center justify-between p-6'>
        <span className='bg-gradient-to-r from-primary-blue to-primary-yellow bg-clip-text text-2xl font-bold text-transparent'>
          {' '}
          Tama.dev
        </span>
        <nav className='flex items-center gap-6'>
          {navs.map((nav) => (
            <Navigation href={nav.href} title={nav.name} key={nav.name} />
          ))}
        </nav>
      </div>
    </header>
  );
}
