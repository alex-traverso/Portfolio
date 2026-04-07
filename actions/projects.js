import { supabase } from "@/utils/supabaseClient";

export async function getProjects(locale) {
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
    title: project[`title_${locale}`],
    description: project[`description_${locale}`],
    tech: project.project_techs.map((pt) => pt.techs),
  }));
}
