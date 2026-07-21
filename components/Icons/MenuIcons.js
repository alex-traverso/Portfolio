import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Close from "./Close";

const MenuIcons = ({ open, toggle }) => {
  return (
    <div
      onClick={toggle}
      className="relative w-8 h-8 cursor-pointer flex items-center justify-center"
    >
      <motion.div
        className="absolute transition-all duration-300 ease-in-out"
        initial={false}
        animate={{ opacity: open ? 0 : 1 }}
      >
        <Menu
          className="stroke-textPrimary"
          width={30}
          height={30}
        />
      </motion.div>
      <motion.div
        className="absolute transition-all duration-300 ease-in-out"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
      >
        <Close
          className="stroke-textPrimary"
          width={30}
          height={30}
          strokeWidth={2}
        />
      </motion.div>
    </div>
  );
};

export default MenuIcons;
