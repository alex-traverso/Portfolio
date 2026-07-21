"use client";
import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function StaggerContainer({ children, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      variants={reduce ? undefined : containerVariants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ children, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp className={className} variants={reduce ? undefined : itemVariants}>
      {children}
    </Comp>
  );
}
