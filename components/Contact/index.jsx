import React, { useState } from "react";
import { validateForm } from "@/validate/validateForm";
import useValidation from "@/hooks/useValidation";
import Titles from "../Titles";
import Button from "../Button";
import Check from "../Icons/Check/index";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
	const INITIAL_STATE = {
		name: "",
		email: "",
		message: "",
	};

	// Funcion que se ejecuta cuando el usuario hace submit
	const openModal = () => {
		setModal(true);
	};

	const { values, errors, isOpen, handleChange, handleSubmit, handleBlur } =
		useValidation(INITIAL_STATE, validateForm, openModal);

	const { name, email, message } = values;
	const [modal, setModal] = useState(isOpen);

	const isButtonDisabled =
		Object.keys(errors).length > 0 ||
		name === "" ||
		email === "" ||
		message === "" ||
		message.length < 5;

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.10 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<div
			id="contact"
			onSubmit={openModal}
			className="flex flex-col justify-center items-center w-full bg-lightThemeDarkToLight dark:bg-darkThemeDarkToLight pb-sectionBottom pt-sectionTop"
		>
			<Titles>CONTACTO</Titles>
			<section>
				{modal ? (
					<section className="bg-dark/50 min-h-full w-full z-50 top-0 left-0 flex justify-center items-center fixed">
						<div className="bg-dark duration-400 text-dark dark:text-white relative flex md:min-h-[350px] w-[500px] flex-col justify-center items-center gap-4 rounded-xl border border-lightGrey p-6 shadow-inner transition-all border-zinc-700/40 dark:shadow-zinc-700/40">
							<h2 className="text-2xl">El mensaje se envió con exito</h2>
							<Check width={70} height={70} stroke="#4399CE" />
							{modal ? (
								<Button
									onClick={() => {
										setModal(false);
									}}
								>
									CERRAR
								</Button>
							) : null}
						</div>
					</section>
				) : null}
			</section>
			<motion.form
				ref={ref}
				style={{ y: scaleProgress, opacity: scrollYProgress }}
				onSubmit={handleSubmit}
				type="submit"
				className=" flex flex-col justify-center items-start lg:w-[45%] smm:w-[60%] mm:w-[80%] gap-3 text-black dark:text-white"
			>
				<input
					required
					className=" bg-white dark:bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full rounded-xl"
					type="text"
					value={name}
					name="name"
					placeholder="Nombre"
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.name ? (
					<div className="lg:px-3 mm:px-2 text-red-500 text-center">
						{errors.name}
					</div>
				) : null}

				<input
					required
					className=" bg-white dark:bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full rounded-xl"
					type="text"
					value={email}
					name="email"
					placeholder="Email"
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				{errors.email ? (
					<div className="lg:px-3 mm:px-2 text-red-500 text-center">
						{errors.email}
					</div>
				) : null}

				<textarea
					required
					className="bg-white dark:bg-lightestGrey lg:p-3 mm:px-3 mm:py-2 w-full resize-none h-36 rounded-xl"
					value={message}
					name="message"
					type="textarea"
					placeholder="Deja tu mensaje"
					onChange={handleChange}
					onBlur={handleBlur}
				></textarea>

				{errors.message ? (
					<div className="lg:px-3 mm:px-2 text-red-500 text-center">
						{errors.message}
					</div>
				) : null}

				<Button
					disabled={isButtonDisabled}
					onClick={handleSubmit}
					type="submit"
				>
					ENVIAR
				</Button>
			</motion.form>
		</div>
	);
}
