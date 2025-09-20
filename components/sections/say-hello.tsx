const SayHello = () => {
  return (
    <section className='py-24 relative'>
      <div className='bg-black w-full h-[500px] absolute bottom-0 left-0 z-10' />
      <div className='relative grid grid-cols-2 max-w-7xl mx-auto px-4 z-50'>
        <div>
          <p>Say Hello</p>
        </div>

        <div className='h-[700px] bg-white rounded-md border'></div>
      </div>
    </section>
  );
};

export default SayHello;
