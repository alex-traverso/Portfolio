export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button
        className=' w-max font-semibold text-xl px-6 py-2 text-white border-2 border-lightBlue rounded-sm hover:bg-lightBlue transition-all tracking-widest'
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
