import Titles from "../Titles";
import Button from "../Button";

export default function Contact() {
  return (
    <div
      id='contact'
      className='flex flex-col justify-center items-center w-full bg-darkGrey pb-sectionBottom pt-sectionTop '
    >
      <Titles>CONTACTO</Titles>
      <form
        action=''
        className=' flex flex-col justify-center items-start lg:w-[45%] sm:w-[60%] m:w-[80%] gap-3 '
      >
        <input
          className=' bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          placeholder='Nombre'
        />
        <input
          className=' bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          placeholder='Email'
        />
        <textarea
          className='bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full resize-none h-36 rounded-xl'
          name='message'
          id=''
          placeholder='Deja tu mensaje'
        ></textarea>
        <Button>ENVIAR</Button>
      </form>
    </div>
  );
}
