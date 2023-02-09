import Link from "next/link";
import Image from "next/image";
import profilePic from "public/logo.png";

export default function Header() {
  return (
    <header className='flex fixed top-0 h-20 w-screen justify-between items-center bg-slate-400 p-10'>
      <div className=' max-w-sm'>
        <Link href={"/"}>
          <Image
            src={profilePic}
            alt='Picture of the author'
            width={45}
            height={50}
          />
        </Link>
      </div>
      <div className='flex justify-evenly gap-14 font-bold'>
        <Link href='#'>Home</Link>
        <Link href='#'>Sobre mí</Link>
        <Link href='#'>Proyectos</Link>
        <Link href='#'>Contacto</Link>
      </div>
    </header>
  );
}
