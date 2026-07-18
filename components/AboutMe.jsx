import { motion } from "framer-motion";
import Image from "next/image";
import profile from "public/profile.png";
import Titles from "./Titles";
import Button from "./Button";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <>
      <div id="aboutMe" className="w-full bg-base py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col mm:flex mm:justify-end mm:flex-col">
          <Titles>{t("title").toUpperCase()}</Titles>
          <div className="flex lg:flex-row lg:items-start gap-12 transition-all mm:flex-col mm:justify-center mm:items-center mm:w-full">
            <MotionScrollTransition className="rounded-lg mm:w-[280px] m:w-[300px] xs:w-[320px] flex items-center overflow-hidden">
              <Image
                className="object-cover w-full h-full object-top drop-shadow-md hover:scale-[1.03] duration-[0.3s]"
                src={profile}
                alt="Logo"
              />
            </MotionScrollTransition>
            <div className="text-textSecondary xl:w-[500px] md:w-[400px] xs:w-[350px] mm:w-[280px] m:w-[300px]">
              <h2 className="text-textPrimary text-xl md:text-2xl font-semibold text-left mb-2">
                Alex Traverso
              </h2>

              <MotionScrollTransition className="my-6 space-y-4 mm:text-center lg:text-left">
                <p className="text-base leading-relaxed">{t("description1")}</p>
                <p className="text-base leading-relaxed">{t("description2")}</p>
                <p className="text-base leading-relaxed">{t("description3")}</p>
              </MotionScrollTransition>
              <MotionScrollTransition className=" lg:block mm:flex mm:justify-center">
                <Button
                  href="https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/CV%20-%20Alex%20Traverso.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("resume")}
                </Button>
              </MotionScrollTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
