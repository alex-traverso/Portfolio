import { motion } from "framer-motion";

export default function Footer() {
	const today = new Date();
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="lg:px-sectionSides mm:px-sectionSidesMobile bg-lightDarkBg dark:bg-dark h-14 p-sectionTop flex justify-center items-center"
			>
				<div className="w-max">
					<p className=" text-black dark:text-zinc-300 text-center mm:text-[0.8rem] m:text-[0.9rem]">
						©{today.getFullYear()} Alex Traverso. All rights reserved.
					</p>
				</div>
			</motion.div>
		</>
	);
}
