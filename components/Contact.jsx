"use client";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { validateForm } from "@/validate/validateForm";
import useValidation from "@/hooks/useValidation";
import Titles from "./Titles";
import Button from "./Button";
import Check from "./Icons/Check";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");

  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const openModal = () => setModal(true);

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
  const modalRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Cierra modal si se hace click fuera del contenido
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  return (
    <div
      id="contact"
      onSubmit={openModal}
      className="w-full bg-base py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center">
        <Titles>{t("title").toUpperCase()}</Titles>

        {modal && (
          <section
            className="bg-dark/50 min-h-full w-full z-50 top-0 left-0 flex justify-center items-center fixed"
            onClick={handleOverlayClick}
          >
            <div
              ref={modalRef}
              className="bg-surface duration-400 text-textPrimary relative flex md:min-h-[350px] w-[500px] flex-col justify-center items-center gap-4 rounded-xl border border-borderSubtle p-6 shadow-inner transition-all dark:shadow-zinc-700/40"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-textPrimary">
                {t("successMessage")}
              </h2>
              <Check width={70} height={70} stroke="#4399CE" />
              <Button variant="secondary" onClick={() => setModal(false)}>
                {t("close")}
              </Button>
            </div>
          </section>
        )}

        <motion.form
          ref={ref}
          style={{ y: scaleProgress, opacity: scrollYProgress }}
          onSubmit={handleSubmit}
          type="submit"
          className="flex flex-col justify-center items-start lg:w-[45%] smm:w-[60%] mm:w-[80%] gap-3 text-textPrimary"
        >
          <input
            required
            className="w-full bg-transparent border-b border-borderSubtle py-3 focus:border-accent focus:outline-none transition-colors placeholder:text-textTertiary"
            type="text"
            value={name}
            name="name"
            placeholder={t("name")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && (
            <div className="lg:px-3 mm:px-2 text-red-500 text-center">
              {errors.name}
            </div>
          )}

          <input
            required
            className="w-full bg-transparent border-b border-borderSubtle py-3 focus:border-accent focus:outline-none transition-colors placeholder:text-textTertiary"
            type="text"
            value={email}
            name="email"
            placeholder={t("email")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <div className="lg:px-3 mm:px-2 text-red-500 text-center">
              {errors.email}
            </div>
          )}

          <textarea
            required
            className="w-full bg-transparent border-b border-borderSubtle py-3 resize-none h-36 focus:border-accent focus:outline-none transition-colors placeholder:text-textTertiary"
            value={message}
            name="message"
            placeholder={t("message")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && (
            <div className="lg:px-3 mm:px-2 text-red-500 text-center">
              {errors.message}
            </div>
          )}

          <Button
            variant="primary"
            size="md"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
            type="submit"
          >
            {t("send")}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
