-- Agrupa las tecnologias del catalogo por disciplina, para renderizar la seccion
-- Skills (tab Development) en subsecciones: Frontend / Backend / DevOps.
-- Es una dimension distinta de `category` (que separa los tabs Development/Design).
-- Nullable: solo aplica a category = 'development'; las de 'design' quedan en null.
alter table public.techs
  add column discipline text;

alter table public.techs
  add constraint techs_discipline_check
  check (discipline is null or discipline in ('frontend', 'backend', 'devops', 'tools'));
