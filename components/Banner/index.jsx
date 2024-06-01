import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Banner() {
	return (
		<>
			<div className="relative bg-dark w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="absolute z-10 flex flex-col justify-center items-start bg-black lg:px-sectionSides mm:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]"
				>
					<div>
						<h1
							className="text-white font-madeOuterBold font-bold md:text-7xl
						mm:text-4xl m:text-5xl text-left mb-2"
						>
							ALEX TRAVERSO
						</h1>
					</div>
					<h3 className="text-lightBlue font-madeOuterRegular lg:text-3xl md:text-2x1 mm:text-xl mb-5 tracking-wide">
						<Typewriter
							options={{
								strings: ["Desarrollador Front End", "Diseñador Multimedia"],
								autoStart: true,
								loop: true,
								skipAddStyles: true,
								delay: 100,
							}}
						/>
					</h3>

					<Link
						activeClass="active"
						className="cursor-pointer w-max lg:text-base lg:font-medium lg:px-5 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-white border-2 border-lightBlue rounded-full hover:bg-lightBlue transition-all tracking-widest flex items-center text-center"
						to="contact"
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
					>
						CONTACTO
					</Link>
				</motion.div>

				<div className="absolute top-0 left-0 h-screen w-screen">
					<video autoPlay loop muted className="h-full w-full object-cover">
						<source src="/video-banner.mp4" />
					</video>
				</div>
			</div>
		</>
	);
}
