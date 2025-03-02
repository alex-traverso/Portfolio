import LinkProject from "../Icons/LinkProject/index";
import Technology from "../Technology";
import Github from "../Icons/Github/index";
import Link from "next/link";
import { MotionScrollTransition } from "../MotionScrollTransition";
import Image from "next/image";

export default function Project({
	src,
	alt,
	title,
	description,
	github,
	url,
	tech,
}) {
	return (
		<MotionScrollTransition className="relative w-[300px] h-[240px] md:h-[300px] md:w-[360px] group overflow-hidden rounded-lg">
			<Image
				className="w-full h-full object-cover group-hover:scale-[1.05] group-hover:rotate-1 transition-all "
				src={src}
				alt={alt}
				width={800}
				height={800}
			/>
			<div className="absolute bottom-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100 transition-all">
				<div className="absolute flex flex-col w-full h-full bottom-0">
					<div className="bg-lightestBg dark:bg-lightestGrey bg-opacity-70 dark:bg-opacity-80 p-4 h-full flex flex-col justify-end">
						<h2 className="text-lg md:text-xl text-black dark:text-white font-medium">
							{title}
						</h2>
						<p className="text-black dark:text-white text-sm">{description}</p>

						<div className="flex gap-2 pt-3">
							<Link href={url} target="_blank" rel="noreferrer">
								<LinkProject
									width={22}
									height={22}
									fill="#4399CE"
									className="w-[18px] md:w-[25px] hover:scale-[1.1] transition-all"
								/>
							</Link>

							<Link href={github} target="_blank" rel="noreferrer">
								<Github
									width={22}
									height={22}
									stroke="#4399CE"
									className="w-[18px] md:w-[25px] hover:scale-[1.1] transition-all"
								/>
							</Link>
						</div>
						<div className="flex flex-wrap gap-x-1 gap-y-0">
							{tech.map((tech, index) => (
								<Technology key={index} tech={tech} />
							))}
						</div>
						{/* <Technology tech={tech} /> */}
					</div>
				</div>
			</div>
		</MotionScrollTransition>
	);
}
