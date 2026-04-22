const LogoMark = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`relative h-20 w-20 ${className}`}
      aria-label='Correct Pixel logo mark'
      role='img'
    >
      <div className='absolute left-1 top-1 h-12 w-12 rounded border-2 border-black bg-[#ffe45c] shadow-[3px_3px_0_#111]' />
      <div className='absolute bottom-1 right-1 h-12 w-12 rounded border-2 border-black bg-white shadow-[3px_3px_0_#111]' />
      <div className='absolute left-[26px] top-[26px] h-7 w-7 rounded border-2 border-black bg-[#ffe45c]' />
    </div>
  );
};

export default LogoMark;
