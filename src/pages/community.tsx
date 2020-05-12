import Head from "next/head";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { SideProject } from "../entities/SideProject";
import { getTalks } from "../services/getTalks";
import { Talk } from "../entities/Talk";
import { Community } from "../components/Community";
import { getEvents } from "../services/getEvents";
import { Event } from "../entities/Event";

interface Props {
  talks: Talk[];
  events: Event[];
}

export default function SideProjectsPage({ talks, events }: Props) {
  return (
    <Layout showGoBack={true}>
      <Head>
        <title>Community | Santiago Martín Agra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Community talks={talks} events={events} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { talks } = await getTalks();
  const { events } = await getEvents();

  return {
    props: {
      talks,
      events,
    },
  };
}
