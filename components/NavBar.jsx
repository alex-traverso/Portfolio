"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";
import MenuIcons from "./Icons/MenuIcons";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const t = useTranslations("navbar");

  let Links = [
    { name: t("aboutMe"), link: "aboutMe" },
    { name: t("skills"), link: "skills" },
    { name: t("services"), link: "services" },
    { name: t("projects"), link: "projects" },
    { name: t("contact"), link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="shadow-md w-full fixed top-0 left-0 z-50"
      >
        <div className="lg:flex items-center justify-between bg-surface py-4 lg:px-10 px-7">
          <div
            className="text-2xl cursor-pointer flex items-center
      text-gray-800"
          >
            <Link
              activeClass="active"
              className=" cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Image
                className="mr-1 pt-2"
                src="/logo.png"
                alt="Logo"
                height={40}
                width={40}
              />
            </Link>
          </div>

          <div
            onClick={toggleMenu}
            className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
          >
            <MenuIcons open={open} toggle={toggleMenu} />
          </div>
          <ul
            className={`font-medium font-madeOuterRegular mm:flex mm:flex-col mm:items-end lg:flex lg:flex-row lg:items-center lg:pb-0 pb-12 absolute lg:static mm:bg-surface lg:bg-transparent lg:z-auto z-[-1] right-0 w-[60%] mm:h-screen lg:h-auto lg:w-auto lg:pl-0 pr-10 last:pr-0 transition-all duration-500 ease-out ${
              open ? "top-20 " : "top-[-1000px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="lg:mr-9 lg:text-lg w-max lg:my-0 mt-8 tracking-wide cursor-pointer"
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  to={link.link}
                  className="text-textPrimary hover:text-accent duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex flex-col items-end space-y-4 mm:mt-4 lg:mt-0 lg:mr-0 lg:flex lg:flex-row lg:space-y-0 lg:items-center lg:gap-x-4">
              <ToggleTheme />
              <LanguageSwitcher />
            </div>
          </ul>
          {open ? (
            <div
              className="w-screen h-screen bg-black bg-opacity-50 lg:hidden absolute z-[-10] top-0 left-0"
              onClick={() => setOpen(false)}
            ></div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
