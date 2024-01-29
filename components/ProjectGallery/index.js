import Project from "../Project";

export default function ProjectGallery() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-4 lg:grid-rows-5 lg:gap-x-2 lg:gap-y-3 lg:h-[60rem] lg:w-[70vw] smm:grid smm:grid-cols-2 smm:gap-x-2 smm:gap-y-4 mm:grid mm:gap-y-3">
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:col-span-2 lg:h-auto  mm:h-[250px]">
          <Project
            title="Devter"
            description="Clon de Twitter, con funcionalidades como realizar un tweet, comentar e interactuar con otros tweets."
            src="/ProjectsCover/Devter.png"
            alt="Devter"
            github="https://github.com/alex-traverso/devter"
            url="https://devter-three-gamma.vercel.app/"
            tech="Next Js"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto mm:h-[250px]">
          <Project
            title="Lista de productos"
            description="CRUD de lista de productos, en las que el usuario puede subir, ver, editar y eliminar productos"
            src="/ProjectsCover/ProductList.png"
            alt="Lista de productos"
            github="https://github.com/alex-traverso/product-list"
            url="https://product-list-redux.netlify.app/"
            tech="React Js, Redux"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto  mm:h-[250px]">
          <Project
            title="Product Hunt Clon"
            description="Clon de Product Hunt, en la que el usuario puede subir sus productos, realizar comentarios y votar sobre productos de otros usuarios."
            src="/ProjectsCover/ProductHunt.png"
            alt="Product Hunt Clon"
            github="https://github.com/alex-traverso/producthuntnext"
            url="https://producthuntnext-two.vercel.app/"
            tech="Next Js"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto mm:h-[250px]">
          <Project
            title="Lista de notas"
            description="Aplicación para poder crear y borrar notas."
            src="/ProjectsCover/ToDoList.png"
            alt="Lista de notas"
            github="https://github.com/alex-traverso/Add-notes"
            url="https://codesandbox.io/s/github/alex-traverso/Todo-list"
            tech="Next Js"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto mm:h-[250px]">
          <Project
            title="Pokemon Api"
            description="Aplicación para ver una Lista de todos los Pokemones existentes."
            src="/ProjectsCover/PokemonApi.png"
            alt="Pokemon Api"
            github="https://github.com/alex-traverso/Pokemon-Api"
            url="https://alex-traverso.github.io/Pokemon-Api/"
            tech="HTML, CSS, Javascript"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto  mm:h-[250px]">
          <Project
            title="Dona sangre"
            description='Rediseño de sitio web de ONG "Dona Sangre". '
            src="/ProjectsCover/DonaSangre.png"
            alt="Dona sangre"
            github="https://github.com/alex-traverso/Dona-sangre"
            url="https://donando-sangre.netlify.app/"
            tech="HTML, CSS, Javascript, Jquery"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:h-auto  mm:h-[250px]">
          <Project
            title="Calculadora"
            description="Calculadora con múltiples operaciones."
            src="/ProjectsCover/Calculadora.png"
            alt="Calculadora"
            github="https://github.com/alex-traverso/Calculator-App"
            url="https://alex-traverso.github.io/Calculator-App/"
            tech="React Js"
          ></Project>
        </div>

        <div className=" rounded-lg shadow-xl lg:col-span-2 lg:h-auto  mm:h-[250px]">
          <Project
            title="Memorama"
            description='Juego de memoria en la que hay que encontrar las 2 cartas con el mismo emoji para pasar de nivel, aunque también tiene su modo "relajado" para jugarlo sin tiempo ni errores.'
            src="/ProjectsCover/Memorama.png"
            alt="Memorama"
            github="https://github.com/alex-traverso/Memorama"
            url="https://alex-traverso.github.io/Memorama/"
            tech="HTML, CSS, Javascript"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto mm:h-[250px]">
          <Project
            title="Landing Page"
            description="Landing page de producto."
            src="/ProjectsCover/LandingPage.png"
            alt="Landing Page"
            github="https://github.com/alex-traverso/Product-landing-page"
            url="https://alex-traverso.github.io/Product-landing-page/"
            tech="HTML, CSS"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto lg:col-span-2 mm:h-[250px]">
          <Project
            title="Pack Eventos"
            description="Sitio web oficial para Pack Eventos."
            src="/ProjectsCover/Pack-eventos.png"
            github="https://github.com/alex-traverso/PackEventos"
            alt="Pack Eventos"
            url="https://packeventos.com/"
            tech="Next Js, MongoDB, Tailwind CSS"
          ></Project>
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto lg:col-span-2 mm:h-[250px]">
          <Project
            title="Nexo podcast"
            description="Sitio web realizado en la universidad. El objetivo era crear un sitio web en donde se promocionen capítulos del podcast creado en la materia."
            src="/ProjectsCover/Nexo-podcast.png"
            alt="Nexo podcast"
            github="https://github.com/alex-traverso/nexo-podcast"
            url="https://nexo-podcast.vercel.app/"
            tech="Next Js, Tailwind CSS"
          ></Project>
        </div>
      </div>
    </>
  );
}
