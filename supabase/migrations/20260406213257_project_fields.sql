create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  src text,
  github text,
  alt text,
  url text,
  created_at timestamp with time zone default now()
);

create table techs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  src text,
  created_at timestamp with time zone default now()
);

create table project_techs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  tech_id uuid references techs(id) on delete cascade,
  created_at timestamp with time zone default now()
);