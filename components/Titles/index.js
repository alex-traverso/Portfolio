export default function Titles({ children }) {
  return (
    <>
      <div className='relative h-16 w-full flex justify-center items-center'>
        <h2 className='text-lightBlue z-10 text-3xl font-medium absolute center'>
          {children}
        </h2>

        <h2 className='text-lightGrey opacity-30 text-6xl font-medium absolute center'>
          {children}
        </h2>
      </div>
    </>
  );
}
