import Head from "next/head";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { SideProject } from "../entities/SideProject";
import { getTalks } from "../services/getTalks";
import { Talk } from "../entities/Talk";
import { Talks } from "../components/Talks";

interface Props {
  talks: Talk[];
}

export default function SideProjectsPage({ talks }: Props) {
  return (
    <Layout showGoBack={true}>
      <Head>
        <title>Talks | Santiago Martín Agra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Talks talks={talks} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { talks } = await getTalks();

  return {
    props: {
      talks,
    },
  };
}
