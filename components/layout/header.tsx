import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed w-full h-20 z-10 p-4 '>
      <nav className='flex justify-between items-center p-4 w-full max-w-7xl h-16 mx-auto top-0 z-10 text-black font-josefin'>
        <h1 className='text-2xl font-playwrite text-black font-bold'>
          <span className='mr-0.5'>Correct</span>
          <span className='text-whte px-2 pb-1.5 rounded-sm font-playwrite text-purple-600'>
            pixel.
          </span>
        </h1>

        <ul className='flex gap-8 font-medium text-lg'>
          <li>
            <Link href='/'>Projects</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
