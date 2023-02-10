//Iconos
import Github from "../Icons/Github/index";
import Instagram from "../Icons/Instagram/index";
import Linkedin from "../Icons/Linkedin/index";

export default function SocialMedia() {
  return (
    <>
      <div className='flex flex-col justify-center items-center fixed bottom-0 left-6 gap-6 h-2/6'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/alextraverso/'
        >
          <Instagram
            className='hover:fill-lightBlue transition-all'
            width={30}
            height={30}
            fill='#fff'
          />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/alex-traverso'
        >
          <Github
            className='hover:stroke-lightBlue transition-all'
            width={30}
            height={30}
            stroke='#fff'
          />
        </a>

        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/alex-traverso'
        >
          <Linkedin
            className='hover:fill-lightBlue transition-all'
            width={30}
            height={30}
            fill='#fff'
          />
        </a>
        <hr className='h-24 w-0.5 border-0 border-lightBlue bg-lightBlue' />
      </div>
    </>
  );
}
/* 
height:100vh;
 width:.5vw;
 border-width:0;
 color:#000;
 background-color:#000; */