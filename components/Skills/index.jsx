import Titles from "../Titles";
import { useState } from "react";
import { useTheme } from "next-themes";
import SkillsCard from "../SkillsCard";

import { MotionScrollTransition } from "../MotionScrollTransition";

export default function Skills() {
	const [category, setCategory] = useState("Development");
	const { theme, setTheme } = useTheme();

	const developmentSkills = [
		{
			src: "/DevelopmentIcons/html.svg",
			title: "HTML5",
			alt: "HTML5",
		},
		{
			src: "/DevelopmentIcons/css.svg",
			alt: "CSS",
			title: "CSS",
		},
		{
			src: "/DevelopmentIcons/javascript.svg",
			alt: "Javascript",
			title: "Javascript",
		},
		{
			src: "/DevelopmentIcons/reactJs.svg",
			alt: "React Js",
			title: "React Js",
		},
		{
			src: {
				lightThemeSrc: "/DevelopmentIcons/nextLight.svg",
				darkThemeSrc: "/DevelopmentIcons/nextDark.svg",
			},
			alt: "Next Js",
			title: "Next Js",
		},
		{
			src: "/DevelopmentIcons/mongodb.svg",
			alt: "MongoDB",
			title: "MongoDB",
		},

		{
			src: "/DevelopmentIcons/firebase.svg",
			alt: "Firebase",
			title: "Firebase",
		},

		{ src: "/DevelopmentIcons/git.svg", alt: "Git", title: "Git" },

		{
			src: "/DevelopmentIcons/bootstrap.svg",
			alt: "Bootstrap",
			title: "Bootstrap",
		},
		{
			src: "/DevelopmentIcons/tailwind.svg",
			alt: "Talwind CSS",
			title: "Talwind CSS",
		},
	];

	const designSkills = [
		{
			src: "/DesignIcons/illustrator.svg",
			alt: "Adobe Illustrator",
			title: "Adobe Illustrator",
		},
		{
			src: "/DesignIcons/photoshop.svg",
			alt: "Adobe Photoshop",
			title: "Adobe Photoshop",
		},
		{
			src: "/DesignIcons/premiere.svg",
			alt: "Adobe Premiere",
			title: "Adobe Premiere",
		},
		{
			src: "/DesignIcons/figma.svg",
			alt: "Figma",
			title: "Figma",
		},
	];

	return (
		<>
			<section
				id="skills"
				className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightThemeLightToDark dark:bg-darkThemeLightToDark flex flex-col justify-center items-center"
			>
				<Titles>HABILIDADES</Titles>
				<MotionScrollTransition className="flex gap-6 font-madeOuterRegular font-medium mm:text-xl m:text-[22px] xs:text-2xl text-dark dark:text-white cursor-pointer mb-8">
					<button
						onClick={() => {
							setCategory("Development");
						}}
						className={`transition-all ${
							category === "Development"
								? "text-lightBlue underline underline-offset-8"
								: "hover:text-lightBlue transition-all hover:underline hover:underline-offset-8"
						}`}
					>
						Desarrollo Web
					</button>
					<button
						onClick={() => {
							setCategory("Design");
						}}
						className={
							category === "Design"
								? "text-lightBlue underline underline-offset-8"
								: "hover:text-lightBlue transition-all hover:underline hover:underline-offset-8"
						}
					>
						Diseño
					</button>
				</MotionScrollTransition>

				<div className="flex flex-wrap justify-center items-center gap-6 w-[70vw]">
					{category === "Development" ? (
						<>
							{developmentSkills.map((skill) => {
								const src =
									typeof skill.src === "object"
										? theme === "light"
											? skill.src.lightThemeSrc
											: skill.src.darkThemeSrc
										: skill.src;
								return (
									<SkillsCard
										key={skill.title}
										title={skill.title}
										src={src}
										alt={skill.alt}
									/>
								);
							})}
						</>
					) : null}
					{category === "Design" ? (
						<>
							{designSkills.map((skill) => (
								<SkillsCard
									key={skill.title}
									title={skill.title}
									src={skill.src}
									alt={skill.alt}
								/>
							))}
						</>
					) : null}
				</div>
			</section>
		</>
	);
}
