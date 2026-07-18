import { MotionScrollTransition } from "./MotionScrollTransition";

export default function ServicesCard({ src, alt, title, description }) {
  return (
    <>
      <MotionScrollTransition className="duration-400 text-textSecondary text-center flex md:min-h-[280px] w-[330px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-borderSubtle p-6 shadow-inner transition-all hover:bg-surface dark:shadow-zinc-700/40 dark:hover:shadow-transparent">
        <img className=" w-14" src={src} alt={alt} />
        <h3 className="text-textPrimary font-medium text-xl">{title}</h3>
        <p className=" text-center">{description}</p>
      </MotionScrollTransition>
    </>
  );
}
