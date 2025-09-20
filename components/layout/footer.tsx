export default function Footer() {
  return (
    <footer className='w-full h-20 p-4 bg-black flex items-center justify-center font-josefin'>
      <p className='text-sm text-white'>
        &copy; {new Date().getFullYear()} Correct Pixel. All rights reserved.
      </p>
    </footer>
  );
}
