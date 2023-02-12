import LinkProject from "../Icons/LinkProject/index";
import Github from "../Icons/Github/index";

export default function Project({ src, alt, title, description, github, url }) {
  return (
    <>
      <div className='bg-slate-700 rounded-lg shadow-xl min-h-[250px] relative'>
        <img className=' w-full h-full object-cover' src={src} alt={alt} />
        <div className='absolute bottom-0 w-full h-full overflow-hidden opacity- hover:opacity-100 transition-all'>
          <div className='flex flex-col bg-slate-500 w-full gap-6 absolute bottom-0'>
            <div className=' bg-slate-200 p-4 min-h-[120px] '>
              <h2 className=' text-xl font-medium'>{title}</h2>
              <p>{description}</p>
              <div className='flex gap-2 pt-2'>
                <a href={url} target='_blank' rel='noreferrer'>
                  <LinkProject width={20} height={20} />
                </a>
                <a href={github} target='_blank' rel='noreferrer'>
                  <Github width={20} height={20} stroke='#000' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
