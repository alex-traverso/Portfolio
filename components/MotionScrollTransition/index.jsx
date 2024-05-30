import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const MotionScrollTransition = ({ children, className }) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<motion.div
			className={className}
			ref={ref}
			style={{ y: scaleProgress, opacity: scrollYProgress }}
		>
			{children}
		</motion.div>
	);
};
