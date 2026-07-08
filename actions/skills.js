import { supabase } from "@/utils/supabaseClient";

export async function getSkills() {
  const { data, error } = await supabase
    .from("techs")
    .select("*")
    .eq("show_in_skills", true)
    .order("display_order", { ascending: true });
  if (error) throw error;

  return data;
}
