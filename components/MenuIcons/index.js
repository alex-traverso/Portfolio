// import React from "react";
// import Menu from "../Icons/Menu/index";
// import Close from "../Icons/Close/index";

// const MenuIcons = ({ open, toggle }) => {
// 	return (
// 		<div
// 			onClick={toggle}
// 			className="relative w-8 h-8 cursor-pointer flex items-center justify-center"
// 		>
// 			<div
// 				className={`absolute transition-transform duration-300 ease-in-out transform ${
// 					open ? "rotate-45 opacity-0" : "opacity-100"
// 				}`}
// 			>
// 				<Menu
// 					className="stroke-black dark:stroke-white"
// 					width={30}
// 					height={30}
// 				/>
// 			</div>
// 			<div
// 				className={`absolute transition-transform duration-300 ease-in-out transform ${
// 					open ? "opacity-100" : "-rotate-45 opacity-0"
// 				}`}
// 			>
// 				<Close
// 					className="stroke-black dark:stroke-white"
// 					width={30}
// 					height={30}
// 					strokeWidth={2}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default MenuIcons;

import React from "react";
import { motion } from "framer-motion";
import Menu from "../Icons/Menu/index";
import Close from "../Icons/Close/index";

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
					className="stroke-black dark:stroke-white"
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
					className="stroke-black dark:stroke-white"
					width={30}
					height={30}
					strokeWidth={2}
				/>
			</motion.div>
		</div>
	);
};

export default MenuIcons;
