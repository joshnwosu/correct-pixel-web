import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed w-full h-20 z-10 p-4'>
      <nav className='px-10 p-4 w-full max-w-5xl h-16 border border-gray-600/50 mx-auto flex items-center top-0 z-10 text-white rounded-2xl'>
        <ul className='container flex gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
