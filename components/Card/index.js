export default function Card({ src, alt, title, description }) {
  return (
    <>
      <div className="duration-400 text-dark dark:text-white relative flex md:min-h-auto w-[350px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-lightGrey p-6 shadow-inner transition-all hover:bg-lightestGrey  border-zinc-700/40 dark:shadow-zinc-700/40 hover:bg-zinc-600/30 dark:hover:shadow-transparent">
        <img className="w-20" src={src} alt={alt} />
        <h3 className=" font-medium text-xl">{title}</h3>
        <p className=" text-center">{description}</p>
      </div>
    </>
  );
}
