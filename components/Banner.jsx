import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("banner");

  return (
    <>
      <div className="relative bg-dark w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden">
        <div className="absolute z-10 flex flex-col justify-center items-start bg-black lg:px-sectionSides mm:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]">
          <div>
            <h1
              className="text-white font-madeOuterBold font-bold md:text-7xl
						mm:text-4xl m:text-[2.5rem] text-left mb-2"
            >
              ALEX TRAVERSO
            </h1>
          </div>
          <h3 className="text-lightBlue font-madeOuterRegular lg:text-3xl md:text-2x1 mm:text-xl mb-5 tracking-wide">
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

          <p className="text-white max-w-md mb-6 text-base leading-relaxed lg:text-left mm:text-center mm:px-4 lg:px-0">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-4 mm:justify-center lg:justify-start mm:w-full lg:w-auto">
            <Link
              activeClass="active"
              className="cursor-pointer w-max lg:text-base lg:font-medium lg:px-5 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-white bg-accent rounded-md hover:opacity-90 transition-all tracking-widest flex items-center text-center"
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
              className="cursor-pointer w-max lg:text-base lg:font-medium lg:px-5 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-white border-2 border-accent rounded-md hover:bg-accent transition-all tracking-widest flex items-center text-center"
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
