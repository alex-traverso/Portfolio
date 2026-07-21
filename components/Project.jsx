import TechChip from "./TechChip";
import Button from "./Button";
import { StaggerItem } from "./MotionStagger";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Project({
  src,
  alt,
  title,
  description,
  github,
  url,
  tech,
}) {
  const t = useTranslations("projects");

  return (
    <StaggerItem className="h-full">
      <div className="bg-surface rounded-xl border border-borderSubtle overflow-hidden hover:border-[var(--accent-40)] transition-colors h-full flex flex-col">
        <div className="relative w-full aspect-[16/10]">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
        <div className="p-6 flex flex-col gap-4 flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-textPrimary">
            {title}
          </h3>
          <p className="text-sm text-textSecondary line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <TechChip key={item.name} skill={item} size="sm" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-borderSubtle">
            {github && (
              <Button
                variant="secondary"
                size="sm"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("repository")}
              </Button>
            )}
            {url && (
              <Button
                variant="secondary"
                size="sm"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("viewSite")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}
