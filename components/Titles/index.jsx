import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Titles({ children }) {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "2 1"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ y, opacity }}
			className="relative h-16 w-full flex justify-center items-center mb-7"
		>
			<h2 className="text-lightBlue font-madeOuterRegular z-10 lg:text-4xl md:text-3xl smm:text-3xl mm:text-2xl font-bold absolute center">
				{children}
			</h2>
			<h2 className="text-lightestGrey font-madeOuterRegular dark:text-lightGrey opacity-20 lg:text-6xl md:text-5xl smm:text-5xl mm:text-4xl font-medium absolute center">
				{children}
			</h2>
		</motion.div>
	);
}
