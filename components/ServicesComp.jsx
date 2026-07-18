import { useTranslations } from "next-intl";
import ServicesCard from "./ServicesCard";
import Titles from "./Titles";

export default function Services() {
  const t = useTranslations("services");

  const baseUrl = `https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/`;

  return (
    <>
      <div
        id="services"
        className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-base flex flex-col justify-center items-center"
      >
        <div>
          <Titles>{t("title").toUpperCase()}</Titles>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 w-[70vw]">
          <ServicesCard
            src={`${baseUrl}uxui-icon.svg`}
            alt={t("uxuiAlt")}
            title={t("uxuiTitle")}
            description={t("uxuiDescription")}
          />
          <ServicesCard
            src={`${baseUrl}design-icon.svg`}
            alt={t("designAlt")}
            title={t("designTitle")}
            description={t("designDescription")}
          />
          <ServicesCard
            src={`${baseUrl}development-icon.svg`}
            alt={t("developmentAlt")}
            title={t("developmentTitle")}
            description={t("developmentDescription")}
          />
        </div>
      </div>
    </>
  );
}
