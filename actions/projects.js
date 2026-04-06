import { supabase } from "@/utils/supabaseClient";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select(`
    *,
    project_techs (
      *,
      techs (*)
    )
  `);
  if (error) throw error;

  return data.map((project) => ({
    ...project,
    tech: project.project_techs.map((pt) => pt.techs),
  }));
}
