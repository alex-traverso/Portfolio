import HomePageContainer from "@/components/HomepageContainer";
import { getProjects } from "@/actions/projects";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      <HomePageContainer projects={projects} />
    </>
  );
}
