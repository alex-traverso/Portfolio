import { useTranslations } from "next-intl";
import ServicesCard from "./ServicesCard";
import Titles from "./Titles";
import { StaggerContainer } from "./MotionStagger";

export default function Services() {
  const t = useTranslations("services");

  const baseUrl = `https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/`;

  return (
    <>
      <div id="services" className="w-full bg-base py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center">
          <div>
            <Titles>{t("title").toUpperCase()}</Titles>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <ServicesCard
              src={`${baseUrl}development-icon.svg`}
              alt={t("webAppsAlt")}
              title={t("webAppsTitle")}
              description={t("webAppsDescription")}
            />
            <ServicesCard
              src={`${baseUrl}uxui-icon.svg`}
              alt={t("websitesAlt")}
              title={t("websitesTitle")}
              description={t("websitesDescription")}
            />
            <ServicesCard
              src={`${baseUrl}design-icon.svg`}
              alt={t("automationAlt")}
              title={t("automationTitle")}
              description={t("automationDescription")}
            />
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
