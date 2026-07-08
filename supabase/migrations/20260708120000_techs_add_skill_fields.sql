-- Extiende `techs` para que sea el catalogo unico de tecnologias,
-- consumido tanto por la seccion Proyectos (project_techs) como por la
-- seccion Skills (que antes tenia la lista hardcodeada en Skills.jsx).
alter table public.techs
  add column category        text    not null default 'development',
  add column src_dark        text,                 -- override de icono para tema oscuro (ej. Next Js)
  add column show_in_skills  boolean not null default true,
  add column display_order   integer not null default 0;

alter table public.techs
  add constraint techs_category_check check (category in ('development', 'design'));
