import Project from "../Project";

export default function ProjectGallery() {
  return (
    <>
      <div className='grid grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense w-full'>
        <Project
          className='bg-red-500 rounded-lg shadow-xl min-h-[250px]'
          title='Devter'
          description='Lorem Ipsum'
          src='a.jpg'
          alt=''
          github='https://www.github.com'
          url='https://www.google.com'
        ></Project>
        {/* <Project className='bg-orange-500 rounded-lg shadow-xl min-h-[250px] col-span-3'></Project>
        <Project className='bg-yellow-500 rounded-lg shadow-xl min-h-[250px] row-span-2 col-span-2'></Project>
        <Project className='bg-green-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-teal-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-blue-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-indigo-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-purple-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-pink-500 rounded-lg shadow-xl min-h-[250px]'></Project>
        <Project className='bg-slate-500 rounded-lg shadow-xl min-h-[250px]'></Project> */}
      </div>
    </>
  );
}
