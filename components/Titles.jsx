"use client";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Titles({ children }) {
  const reduce = useReducedMotion();
  const words = String(children).split(" ");

  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.5 }}
      className="relative h-16 w-full flex justify-center items-center mb-8"
    >
      <h2 className="text-textPrimary font-madeOuterBold text-4xl md:text-5xl font-bold leading-tight">
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={reduce ? undefined : word}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
}
