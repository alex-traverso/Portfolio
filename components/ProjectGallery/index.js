import Project from "../Project";

export default function ProjectGallery() {
  return (
    <>
      <div className='grid grid-cols-4 grid-rows-4 gap-x-2 gap-y-3 h-[45rem]'>
        <div className=' rounded-lg shadow-xl  row-span-2 col-span-2'>
          <Project
            title='Devter'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/Devter.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl  row-span-2 '>
          <Project
            title='toDoList'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/ToDoList.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl '>
          <Project
            title='ProductList'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/ProductList.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl '>
          <Project
            title='product hunt'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/ProductHunt.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className=' rounded-lg shadow-xl  row-span-2'>
          <Project
            title='Memorama'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/Memorama.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl '>
          <Project
            title='Landing Page'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/LandingPage.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl  col-span-2'>
          <Project
            title='Dona sangre'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/DonaSangre.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className='rounded-lg shadow-xl col-span-2'>
          <Project
            title='Calculadora'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/Calculadora.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
        <div className=' rounded-lg shadow-xl '>
          <Project
            title='Poker Api'
            description='Lorem Ipsum lorem ipsum dolor sit amet, consectetLorem Ipsum lorem ipsum dolor sit amet, consectet'
            src='/ProjectsCover/PokemonApi.png'
            alt=''
            github='https://www.github.com'
            url='https://www.google.com'
          ></Project>
        </div>
      </div>
    </>
  );
}
