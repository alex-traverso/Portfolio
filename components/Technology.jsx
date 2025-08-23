import Image from "next/image";

export default function Technology({ tech }) {
	return (
		<div className="flex justify-center items-center gap-2 py-1 px-2 bg-lightGrey dark:bg-darkGrey text-black dark:text-white hover:bg-lightBlue dark:hover:bg-lightBlue rounded-3xl text-[9px] md:text-[10px] font-medium mt-3 transition-all">
			<Image
				src={tech.src}
				alt={tech.name}
				className="h-4 w-4 md:w-5 md:h-5"
				width={20}
				height={20}
			/>
			<span>{tech.name}</span>
		</div>
		// <div className=" bg-lightGrey text-black hover:bg-lightBlue hover:text-white px-3 py-2 rounded-3xl w-max text-[10px] font-medium mt-3 transition-all">
		// 	{tech}
		// </div>
	);
}
