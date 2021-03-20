import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";

import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { SideProject } from "../entities/SideProject";
import { GetSideProjects } from "../useCases/GetSideProjects";

interface Props {
  projects: SideProject[];
}

export default function SideProjectsPage({ projects }: Props): ReactElement {
  return (
    <Layout showGoBack={true}>
      <Head>
        <title>Side Projects | Santiago Martín Agra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideProjects projects={projects} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: projects } = await new GetSideProjects().perform();

  return {
    props: {
      projects,
    },
  };
};
