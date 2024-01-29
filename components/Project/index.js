import LinkProject from "../Icons/LinkProject/index";
import Technology from "../Technology";
import Github from "../Icons/Github/index";

export default function Project({
  src,
  alt,
  title,
  description,
  github,
  url,
  tech,
}) {
  return (
    <div className="relative h-full w-full">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={src}
        alt={alt}
      />
      <div className="absolute bottom-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100 transition-all">
        <div className="flex flex-col w-full gap-6 absolute bottom-0">
          <div className="bg-lightestBg dark:bg-lightestGrey p-4 min-h-[120px]">
            <h2 className=" text-xl text-black dark:text-white font-medium">
              {title}
            </h2>
            <p className="text-black dark:text-white text-sm">{description}</p>

            <div className="flex gap-2 pt-2">
              <a href={url} target="_blank" rel="noreferrer">
                <LinkProject width={22} height={22} fill="#4399CE" />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <Github width={22} height={22} stroke="#4399CE" />
              </a>
            </div>
            <Technology tech={tech} />
          </div>
        </div>
      </div>
    </div>
  );
}
