import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Email from "./Icons/Email";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
      <div className="flex flex-col justify-end items-center fixed bottom-0 z-50 lg:left-12 mm:left-4 smm:left-8 gap-6 lg:h-2/6 md:h-1/4 mm:h-1/5">
        <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:alextraverso6@gmail.com"
        >
          <Email
            className="hover:scale-[1.05] fill-accent duration-500 shadow-lg"
            width={20}
            height={20}
          />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/alextraverso/"
        >
          <Instagram
            className="fill-accent hover:scale-[1.05] duration-500 shadow-lg"
            width={20}
            height={20}
          />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alex-traverso"
        >
          <Github
            className="stroke-accent hover:scale-[1.05] duration-500 shadow-md"
            width={20}
            height={20}
          />
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alex-traverso"
        >
          <Linkedin
            className="fill-accent hover:scale-[1.05] duration-500 shadow-md"
            width={20}
            height={20}
          />
        </Link>
        <hr className="h-24 w-0.5 border-0 border-accent bg-accent" />
      </div>
    </>
  );
}
