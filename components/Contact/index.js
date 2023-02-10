import Titles from "../Titles";

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-darkGrey pb-sectionBottom pt-sectionTop '>
      <Titles>CONTACTO</Titles>
      <form
        action=''
        className='flex flex-col justify-center items-center w-[65%] gap-2 '
      >
        <input
          className=' bg-lightestGrey p-2 w-[70%]'
          type='text'
          placeholder='Nombre'
        />
        <input
          className=' bg-lightestGrey p-2 w-[70%]'
          type='text'
          placeholder='Email'
        />
        <textarea
          className='bg-lightestGrey p-2 w-[70%] resize-none h-36'
          name='message'
          id=''
          placeholder='Deja tu mensaje'
        ></textarea>
      </form>
    </div>
  );
}
