-- Orden manual de proyectos en la home, mismo patron que techs.display_order
-- (ver supabase/migrations/20260708120000_techs_add_skill_fields.sql).
-- Default alto (9999) para que un proyecto nuevo sin display_order explicito
-- quede al final en vez de saltar al principio.

alter table projects
  add column if not exists display_order integer not null default 9999;

update projects set display_order = 10 where title = 'Pack Eventos';
-- El titulo exacto de "Shiro Studio" no esta en seed.js (se cargo directo en
-- Supabase), se usa ilike para no fallar por un espacio/typo distinto.
-- Verificar en el dashboard que actualizo la fila correcta.
update projects set display_order = 20 where title ilike 'Shiro%';
update projects set display_order = 30 where title = 'Teslo | Shop';
