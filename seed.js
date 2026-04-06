import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error(
    "❌ Faltan las variables de entorno NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY",
  );
  process.exit(1);
}

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
);
const projectsData = [
  {
    title: "Pack Eventos",
    description: "Sitio web oficial para Pack Eventos.",
    src: "/ProjectsCover/Pack-eventos.png",
    github: "https://github.com/alex-traverso/PackEventos",
    alt: "Pack Eventos",
    url: "https://packeventos.com/",
    tech: [
      { name: "Next Js", src: "/DevelopmentIcons/nextDark.svg" },
      { name: "Tailwind CSS", src: "/DevelopmentIcons/tailwind.svg" },
      { name: "PostgreSQL", src: "/DevelopmentIcons/postgreSQL.svg" },
    ],
  },
  {
    title: "Teslo | Shop",
    description: "Ecommerce sobre productos de ropa.",
    src: "/ProjectsCover/Teslo-shop.png",
    github: "https://github.com/alex-traverso/Teslo-shop",
    alt: "Teslo | Shop",
    url: "https://teslo-shop-at.vercel.app/",
    tech: [
      { name: "Next Js", src: "/DevelopmentIcons/nextDark.svg" },
      { name: "Typescript", src: "/DevelopmentIcons/typescript.svg" },
      { name: "Prisma", src: "/DevelopmentIcons/prisma.svg" },
      { name: "PostgreSQL", src: "/DevelopmentIcons/postgreSQL.svg" },
    ],
  },
  {
    title: "Devter",
    description:
      "Clon de Twitter, con funcionalidades como realizar un tweet, comentar e interactuar con otros tweets.",
    src: "/ProjectsCover/Devter.png",
    alt: "Devter",
    github: "https://github.com/alex-traverso/devter",
    url: "https://devter-three-gamma.vercel.app/",
    tech: [{ name: "Next Js", src: "/DevelopmentIcons/nextDark.svg" }],
  },
  {
    title: "Lista de productos",
    description:
      "CRUD de lista de productos, en las que el usuario puede subir, ver, editar y eliminar productos",
    src: "/ProjectsCover/ProductList.png",
    alt: "Lista de productos",
    github: "https://github.com/alex-traverso/product-list",
    url: "https://product-list-redux.netlify.app/",
    tech: [
      { name: "React Js", src: "/DevelopmentIcons/reactJs.svg" },
      { name: "Redux", src: "/DevelopmentIcons/redux.svg" },
    ],
  },
  {
    title: "Product Hunt Clon",
    description:
      "Clon de Product Hunt, en la que el usuario puede subir sus productos, realizar comentarios y votar sobre productos de otros usuarios.",
    src: "/ProjectsCover/ProductHunt.png",
    alt: "Product Hunt Clon",
    github: "https://github.com/alex-traverso/producthuntnext",
    url: "https://producthuntnext-two.vercel.app/",
    tech: [
      { name: "Next Js", src: "/DevelopmentIcons/nextDark.svg" },
      { name: "Firebase", src: "/DevelopmentIcons/firebase.svg" },
    ],
  },
  {
    title: "Memorama",
    description:
      'Juego de memoria en la que hay que encontrar las 2 cartas con el mismo emoji para pasar de nivel, aunque también tiene su modo "relajado" para jugarlo sin tiempo ni errores.',
    src: "/ProjectsCover/Memorama.png",
    alt: "Memorama",
    github: "https://github.com/alex-traverso/Memorama",
    url: "https://alex-traverso.github.io/Memorama/",
    tech: [
      { name: "HTML", src: "/DevelopmentIcons/html.svg" },
      { name: "CSS", src: "/DevelopmentIcons/css.svg" },
      { name: "Javascript", src: "/DevelopmentIcons/javascript.svg" },
    ],
  },
];

// Extrae todas las techs únicas del JSON local
function extractUniqueTechs(projects) {
  const map = new Map();
  for (const project of projects) {
    for (const tech of project.tech) {
      if (!map.has(tech.name)) {
        map.set(tech.name, { name: tech.name, src: tech.src });
      }
    }
  }
  return Array.from(map.values());
}

async function seed() {
  console.log("🌱 Iniciando seed...\n");

  // 1. Insertar techs únicas
  const uniqueTechs = extractUniqueTechs(projectsData);
  console.log(`📦 Insertando ${uniqueTechs.length} techs...`);

  const { data: insertedTechs, error: techsError } = await supabase
    .from("techs")
    .upsert(uniqueTechs, { onConflict: "name" })
    .select();

  if (techsError) {
    console.error("❌ Error insertando techs:", techsError.message);
    process.exit(1);
  }

  // Mapa name -> id para lookup rápido
  const techMap = new Map(insertedTechs.map((t) => [t.name, t.id]));
  console.log(
    `✅ Techs insertadas: ${insertedTechs.map((t) => t.name).join(", ")}\n`,
  );

  // 2. Insertar projects
  const projectsToInsert = projectsData.map(({ tech, ...rest }) => rest);
  console.log(`📦 Insertando ${projectsToInsert.length} projects...`);

  const { data: insertedProjects, error: projectsError } = await supabase
    .from("projects")
    .upsert(projectsToInsert, { onConflict: "title" })
    .select();

  if (projectsError) {
    console.error("❌ Error insertando projects:", projectsError.message);
    process.exit(1);
  }

  const projectMap = new Map(insertedProjects.map((p) => [p.title, p.id]));
  console.log(
    `✅ Projects insertados: ${insertedProjects.map((p) => p.title).join(", ")}\n`,
  );

  // 3. Insertar project_techs (relaciones)
  const projectTechs = [];
  for (const project of projectsData) {
    const projectId = projectMap.get(project.title);
    for (const tech of project.tech) {
      const techId = techMap.get(tech.name);
      if (projectId && techId) {
        projectTechs.push({ project_id: projectId, tech_id: techId });
      }
    }
  }

  console.log(
    `📦 Insertando ${projectTechs.length} relaciones project_techs...`,
  );

  const { data: insertedRelations, error: relationsError } = await supabase
    .from("project_techs")
    .upsert(projectTechs, { onConflict: "project_id,tech_id" })
    .select();

  if (relationsError) {
    console.error("❌ Error insertando project_techs:", relationsError.message);
    process.exit(1);
  }

  console.log(`✅ Relaciones insertadas: ${insertedRelations.length}\n`);
  console.log("🎉 Seed completado exitosamente!");
}

seed();
