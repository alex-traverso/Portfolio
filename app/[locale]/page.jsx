import { getLocale } from "next-intl/server";
import HomePageContainer from "@/components/HomepageContainer";
import { getProjects } from "@/actions/projects";

export default async function HomePage({ params }) {
  // const locale = await getLocale();
  const { locale } = await params;

  const projects = await getProjects(locale);

  return (
    <>
      <HomePageContainer projects={projects} />
    </>
  );
}
