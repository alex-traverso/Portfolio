import Button from "../Button";

export default function Banner() {
  return (
    <>
      <div className='flex relative flex-col h-[calc(100vh_-_5rem)] mt-20 p-20 bg-dark'>
        {/* <Image src={profilePic} alt='Banner' height='90vh' width='10vw' /> */}
        {/*  <video autoPlay loop style={{ width: "auto", height: "auto" }}>
          <source src='https://video.wixstatic.com/video/584eeb_7d69869f7df04c108b5dcf9ba9f64998/1080p/mp4/file.mp4' />
        </video> */}
        <div className='absolute top-1/4 pl-0 py-20 pr-20 '>
          <h1 className='text-white lg:text-7xl md:text-6xl sm:text-center xs:text-5xl lg:text-left md:text-center font-semibold mb-2'>
            ALEX TRAVERSO
          </h1>
          <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 sm:text-xl mb-5 tracking-wide'>
            Desarrollador web, Diseñador multimedia
          </h3>
          <Button>CONTACTO</Button>
        </div>
      </div>
    </>
  );
}
