import { MotionScrollTransition } from "./MotionScrollTransition";

export default function SkillsCard({ src, alt, title }) {
  return (
    <MotionScrollTransition className="relative flex flex-col items-center justify-center w-[220px] h-[220px] cursor-pointer rounded-xl border border-borderSubtle p-6 shadow-inner transition-all hover:bg-surface dark:shadow-zinc-700/40 dark:hover:shadow-transparent group">
      <div className="flex flex-col items-center justify-center transition-transform group-hover:-translate-y-4">
        <img className="w-20" src={src} alt={alt} />
      </div>
      <h3 className="text-textPrimary absolute opacity-0 transition-all duration-300 transform group-hover:opacity-100 mt-24">
        {title}
      </h3>
    </MotionScrollTransition>
  );
}
