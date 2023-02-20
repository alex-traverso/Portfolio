export default function Button({ children, onClick, disabled, href, target }) {
  return (
    <>
      <a
        href={href}
        target={target}
        rel='noreferrer'
        className='w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 m:px-4 m:py-1 m:text-sm text-black dark:text-white border-2 border-lightBlue rounded-lg hover:bg-lightBlue transition-all tracking-widest'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </a>
    </>
  );
}
