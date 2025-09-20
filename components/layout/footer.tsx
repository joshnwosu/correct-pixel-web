export default function Footer() {
  return (
    <footer className='w-full h-20 p-4 bg-gray-100 flex items-center justify-center font-josefin'>
      <p className='text-sm text-gray-600'>
        &copy; {new Date().getFullYear()} Correct Pixel. All rights reserved.
      </p>
    </footer>
  );
}
