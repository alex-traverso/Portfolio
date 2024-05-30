import { MotionScrollTransition } from "../MotionScrollTransition";

export default function SkillsCard({ src, alt, title }) {
	return (
		<MotionScrollTransition className="relative flex flex-col items-center justify-center w-[220px] h-[220px] cursor-pointer rounded-xl border border-lightGrey p-6 shadow-inner transition-all hover:bg-lightestGrey border-zinc-700/40 dark:shadow-zinc-700/40 hover:bg-zinc-600/30 dark:hover:shadow-transparent group">
			<div className="flex flex-col items-center justify-center transition-transform group-hover:-translate-y-4">
				<img className="w-20" src={src} alt={alt} />
			</div>
			<h3 className="absolute opacity-0 transition-all duration-300 transform group-hover:opacity-100 mt-24">
				{title}
			</h3>
		</MotionScrollTransition>
	);
}
