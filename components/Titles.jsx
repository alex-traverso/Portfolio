"use client";
import { useRef } from "react";
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
      className="relative h-16 w-full flex justify-center items-center mb-8"
    >
      <h2 className="text-textPrimary font-madeOuterBold text-4xl md:text-5xl font-bold leading-tight">
        {children}
      </h2>
    </motion.div>
  );
}
