import Link from "next/link";
import Image from "next/image";
import profilePic from "public/logo.png";

export default function Header() {
  return (
    <header className='flex fixed top-0 z-50 h-20 w-full justify-between items-center bg-darkGrey px-20 py-10'>
      <div className=' max-w-sm'>
        <Link href={"/"}>
          <Image src={profilePic} alt='Logo' width={40} height={45} />
        </Link>
      </div>
      <div className='flex justify-evenly gap-14 font-medium text-white text-lg px-14'>
        <Link
          className='hover:text-lightBlue transition-all tracking-wide'
          href='#'
        >
          Home
        </Link>
        <Link
          className='hover:text-lightBlue transition-all tracking-wide'
          href='#'
        >
          Sobre Mí
        </Link>
        <Link
          className='hover:text-lightBlue transition-all tracking-wide'
          href='#'
        >
          Proyectos
        </Link>
        <Link
          className='hover:text-lightBlue transition-all tracking-wide'
          href='#'
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
