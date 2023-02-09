import Link from "next/link";
import Image from "next/image";
import profilePic from "public/logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <Image src={profilePic} alt='Logo' width={35} height={45} />
        </div>
        <Link href='#'>Home</Link>
        <Link href='#'>Sobre mí</Link>
        <Link href='#'>Proyectos</Link>
        <Link href='#'>Contacto</Link>
      </nav>
    </>
  );
}
