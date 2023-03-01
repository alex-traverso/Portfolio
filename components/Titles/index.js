export default function Titles({ children }) {
  return (
    <>
      <div className='relative h-16 w-full flex justify-center items-center mb-7'>
        <h2 className='text-lightBlue z-10 lg:text-4xl md:text-3xl sm:text-3xl m:text-2xl font-bold absolute center'>
          {children}
        </h2>

        <h2 className='text-lightestGrey dark:text-lightGrey opacity-20 lg:text-6xl md:text-5xl sm:text-5xl m:text-4xl font-medium absolute center'>
          {children}
        </h2>
      </div>
    </>
  );
}
