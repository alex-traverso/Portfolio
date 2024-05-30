import LinkProject from "../Icons/LinkProject/index";
import Technology from "../Technology";
import Github from "../Icons/Github/index";
import Link from "next/link";
import { MotionScrollTransition } from "../MotionScrollTransition";

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
		<MotionScrollTransition className="relative h-[300px] w-[360px]">
			<img
				className="w-full h-full object-cover rounded-lg"
				src={src}
				alt={alt}
			/>
			<div className="absolute bottom-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100 transition-all">
				<div className="flex flex-col w-full gap-6 absolute bottom-0">
					<div className="bg-lightestBg dark:bg-lightestGrey p-4 min-h-[120px]">
						<h2 className=" text-xl text-black dark:text-white font-medium">
							{title}
						</h2>
						<p className="text-black dark:text-white text-sm">{description}</p>

						<div className="flex gap-2 pt-2">
							<Link href={url} target="_blank" rel="noreferrer">
								<LinkProject width={22} height={22} fill="#4399CE" />
							</Link>

							<Link href={github} target="_blank" rel="noreferrer">
								<Github width={22} height={22} stroke="#4399CE" />
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
