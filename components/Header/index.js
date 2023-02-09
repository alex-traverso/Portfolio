import Link from "next/link";
import Image from "next/image";
import profilePic from "public/logo.png";

export default function Header() {
  return (
    <header className='flex fixed top-0 h-20 w-screen justify-between items-center bg-darkGrey px-20 py-10'>
      <div className=' max-w-sm'>
        <Link href={"/"}>
          <Image src={profilePic} alt='Logo' width={40} height={45} />
        </Link>
      </div>
      <div className='flex justify-evenly gap-14 font-semibold text-white'>
        <Link href='#'>Home</Link>
        <Link href='#'>Sobre mí</Link>
        <Link href='#'>Proyectos</Link>
        <Link href='#'>Contacto</Link>
      </div>
    </header>
  );
}
