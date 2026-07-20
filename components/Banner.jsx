import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";
import { buttonClassName } from "./Button";

export default function Banner() {
  const t = useTranslations("banner");

  return (
    <>
      <div className="dark relative bg-dark w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden">
        <div className="absolute z-10 flex flex-col gap-6 justify-center items-start bg-black lg:px-sectionSides mm:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]">
          <div>
            <h1
              className="text-white font-madeOuterBold font-bold md:text-7xl
						mm:text-4xl m:text-[2.5rem] text-left mb-2"
            >
              ALEX TRAVERSO
            </h1>
            <h3 className="text-lightBlue font-madeOuterRegular lg:text-3xl md:text-2x1 mm:text-xl tracking-wide">
              <Typewriter
                options={{
                  strings: [t("fullstackDeveloper"), t("multimediaDesigner")],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  delay: 100,
                }}
              />
            </h3>
          </div>

          <p className="text-textSecondary max-w-xl text-base md:text-lg leading-relaxed lg:text-left mm:text-center mm:px-4 lg:px-0">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-4 mm:justify-center lg:justify-start mm:w-full lg:w-auto">
            <Link
              activeClass="active"
              className={buttonClassName("primary", "lg")}
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              {t("viewProjects")}
            </Link>
            <Link
              activeClass="active"
              className={buttonClassName("secondary", "lg")}
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              {t("contact")}
            </Link>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-screen w-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/video-banner.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}
