-- Catalogo unico de tecnologias (`techs`).
-- Fuente reproducible: la seccion Skills lee de esta tabla (category + show_in_skills),
-- y la seccion Proyectos la referencia via project_techs.
-- Idempotente: on conflict (name) actualiza icono, categoria, orden y flags.
-- Los SVG viven en el bucket publico `portfolio-assets`.

insert into public.techs (name, src, src_dark, category, show_in_skills, display_order) values
  -- development
  ('HTML',         'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/html.svg',       null, 'development', true, 10),
  ('CSS',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/css.svg',        null, 'development', true, 20),
  ('Javascript',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/javascript.svg', null, 'development', true, 30),
  ('Typescript',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/typescript.svg', null, 'development', true, 40),
  ('React Js',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/react-js.svg',   null, 'development', true, 50),
  ('React Native', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/react-native.svg', null, 'development', true, 60),
  ('Next Js',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/next-light.svg',
                   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/next-dark.svg', 'development', true, 70),
  ('Node.js',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/nodejs.svg',     null, 'development', true, 80),
  ('NestJS',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/nestjs.svg',     null, 'development', true, 85),
  ('Tailwind CSS', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/tailwind.svg',   null, 'development', true, 90),
  ('Bootstrap',    'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/bootstrap.svg',  null, 'development', true, 100),
  ('Redux',        'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/redux.svg',      null, 'development', true, 110),
  ('GraphQL',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/graphql.svg',    null, 'development', true, 120),
  ('PostgreSQL',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/postgresql.svg', null, 'development', true, 130),
  ('MongoDB',      'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/mongodb.svg',    null, 'development', true, 140),
  ('Firebase',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/firebase.svg',   null, 'development', true, 150),
  ('Supabase',     'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/supabase.svg',   null, 'development', true, 160),
  ('Prisma',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/prisma.svg',     null, 'development', true, 170),
  ('Docker',       'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/docker.svg',     null, 'development', true, 180),
  ('AWS',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/aws.svg',        null, 'development', true, 190),
  ('Git',          'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/development-icons/git.svg',        null, 'development', true, 200),
  -- design
  ('Adobe Illustrator', 'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/illustrator.svg', null, 'design', true, 10),
  ('Adobe Photoshop',   'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/photoshop.svg',   null, 'design', true, 20),
  ('Adobe Premiere',    'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/premiere.svg',    null, 'design', true, 30),
  ('Figma',             'https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/design-icons/figma.svg',       null, 'design', true, 40)
on conflict (name) do update set
  src            = excluded.src,
  src_dark       = excluded.src_dark,
  category       = excluded.category,
  show_in_skills = excluded.show_in_skills,
  display_order  = excluded.display_order;
