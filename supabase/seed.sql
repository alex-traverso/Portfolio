-- Catalogo unico de tecnologias (`techs`).
-- Fuente reproducible: la seccion Skills lee de esta tabla (category + discipline + show_in_skills),
-- y la seccion Proyectos la referencia via project_techs.
-- Idempotente: on conflict (name) actualiza icono, categoria, disciplina, orden y flags.
-- Los SVG viven en el bucket publico `portfolio-assets`.
--   category:   'development' | 'design'  -> define el tab
--   discipline: 'frontend' | 'backend' | 'devops'  -> subseccion dentro del tab Development (null en design)

insert into public.techs (name, src, src_dark, category, discipline, show_in_skills, display_order) values
  -- development / frontend
  ('HTML',         'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/html.svg',       null, 'development', 'frontend', true, 10),
  ('CSS',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/css.svg',        null, 'development', 'frontend', true, 20),
  ('Javascript',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/javascript.svg', null, 'development', 'frontend', true, 30),
  ('Typescript',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/typescript.svg', null, 'development', 'frontend', true, 40),
  ('React Js',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/react-js.svg',   null, 'development', 'frontend', true, 50),
  ('React Native', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/react-native.svg', null, 'development', 'frontend', true, 60),
  ('Next Js',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/next-light.svg',
                   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/next-dark.svg', 'development', 'frontend', true, 70),
  ('Tailwind CSS', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/tailwind.svg',   null, 'development', 'frontend', true, 80),
  ('Bootstrap',    'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/bootstrap.svg',  null, 'development', 'frontend', true, 90),
  ('Redux',        'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/redux.svg',      null, 'development', 'frontend', true, 100),
  -- development / backend
  ('Node.js',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/nodejs.svg',     null, 'development', 'backend', true, 110),
  ('NestJS',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/nestjs.svg',     null, 'development', 'backend', true, 120),
  ('GraphQL',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/graphql.svg',    null, 'development', 'backend', true, 130),
  ('PostgreSQL',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/postgresql.svg', null, 'development', 'backend', true, 140),
  ('MongoDB',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/mongodb.svg',    null, 'development', 'backend', true, 150),
  ('Firebase',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/firebase.svg',   null, 'development', 'backend', true, 160),
  ('Supabase',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/supabase.svg',   null, 'development', 'backend', true, 170),
  ('Prisma',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/prisma.svg',     null, 'development', 'backend', true, 180),
  -- development / devops
  ('Docker',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/docker.svg',     null, 'development', 'devops', true, 190),
  ('AWS',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/aws.svg',        null, 'development', 'devops', true, 200),
  ('Git',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/git.svg',        null, 'development', 'devops', true, 210),
  -- design (sin disciplina)
  ('Adobe Illustrator', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/illustrator.svg', null, 'design', null, true, 10),
  ('Adobe Photoshop',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/photoshop.svg',   null, 'design', null, true, 20),
  ('Adobe Premiere',    'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/premiere.svg',    null, 'design', null, true, 30),
  ('Figma',             'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/figma.svg',       null, 'design', null, true, 40)
on conflict (name) do update set
  src            = excluded.src,
  src_dark       = excluded.src_dark,
  category       = excluded.category,
  discipline     = excluded.discipline,
  show_in_skills = excluded.show_in_skills,
  display_order  = excluded.display_order;
