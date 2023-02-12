export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button
        className=' w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 m:px-4 m:py-1 m:text-sm text-white border-2  border-lightBlue rounded-lg hover:bg-lightBlue transition-all tracking-widest'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
