import Link from "next/link";

export default function Button({ children, onClick, disabled, href, target }) {
	return (
		<>
			<Link
				href={`${href}`}
				target={target}
				rel="noreferrer"
				className="cursor-pointer w-max lg:text-base lg:font-medium lg:px-5 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-black dark:text-white border-2 border-lightBlue rounded-full hover:bg-lightBlue transition-all tracking-widest flex items-center text-center"
				onClick={onClick}
				disabled={disabled}
				// className="cursor-pointer w-max font-semibold lg:text-lg lg:px-6 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-black dark:text-white border-2 border-lightBlue rounded-lg hover:bg-lightBlue transition-all tracking-widest"
			>
				{children}
			</Link>
		</>
	);
}
