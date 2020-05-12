import Link from "next/link";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { getSideProjects } from "../services/getSideProjects";
import { SideProject } from "../entities/SideProject";

interface Props {
  projects: SideProject[];
}

export default function SideProjectsPage({ projects }: Props) {
  return (
    <Layout showGoBack={true}>
      <Head>
        <title>Santiago Martín Agra | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideProjects projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { projects } = await getSideProjects();

  return {
    props: {
      projects,
    },
  };
}
