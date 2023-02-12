import Titles from "../Titles";
import Button from "../Button";

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-darkGrey pb-sectionBottom pt-sectionTop '>
      <Titles>CONTACTO</Titles>
      <form
        action=''
        className=' flex flex-col justify-center items-start w-[40%] gap-3 '
      >
        <input
          className=' bg-lightestGrey p-3 w-full rounded-xl'
          type='text'
          placeholder='Nombre'
        />
        <input
          className=' bg-lightestGrey p-3 w-full rounded-xl'
          type='text'
          placeholder='Email'
        />
        <textarea
          className='bg-lightestGrey p-3 w-full resize-none h-36 rounded-xl'
          name='message'
          id=''
          placeholder='Deja tu mensaje'
        ></textarea>
        <Button>ENVIAR</Button>
      </form>
    </div>
  );
}
