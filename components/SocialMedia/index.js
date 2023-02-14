//Iconos
import Github from "../Icons/Github/index";
import Instagram from "../Icons/Instagram/index";
import Linkedin from "../Icons/Linkedin/index";

export default function SocialMedia() {
  return (
    <>
      <div className='flex flex-col justify-end items-center fixed bottom-0 z-50 lg:left-12 m:left-4 sm:left-8 gap-6 lg:h-2/6 md:h-1/4 m:h-1/5'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/alextraverso/'
        >
          <Instagram
            className='hover:fill-lightBlue transition-all shadow-md'
            width={20}
            height={20}
            fill='#fff'
          />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/alex-traverso'
        >
          <Github
            className='hover:stroke-lightBlue transition-all shadow-md'
            width={20}
            height={20}
            stroke='#fff'
          />
        </a>

        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/alex-traverso'
        >
          <Linkedin
            className='hover:fill-lightBlue transition-all shadow-md'
            width={20}
            height={20}
            fill='#fff'
          />
        </a>
        <hr className='h-24 w-0.5 border-0 border-lightBlue bg-lightBlue' />
      </div>
    </>
  );
}
