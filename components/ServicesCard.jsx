import { StaggerItem } from "./MotionStagger";

export default function ServicesCard({ src, alt, title, description }) {
  return (
    <>
      <StaggerItem className="duration-400 text-textSecondary text-center flex md:min-h-[280px] w-full cursor-pointer flex-col items-center gap-4 rounded-xl border border-borderSubtle p-6 shadow-inner transition-all hover:bg-surface dark:shadow-zinc-700/40 dark:hover:shadow-transparent">
        <img className="w-12" src={src} alt={alt} />
        <h3 className="text-textPrimary text-xl md:text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-sm text-center">{description}</p>
      </StaggerItem>
    </>
  );
}
