import Head from "next/head";
import { Community } from "../components/Community";
import { Layout } from "../components/Layout";
import { Event } from "../entities/Event";
import { Talk } from "../entities/Talk";
import { StaticEventRepository } from "../repositories/StaticEventRepository";
import { StaticTalkRepository } from "../repositories/StaticTalkRepository";

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
  const talks = await new StaticTalkRepository().getAll();
  const events = await new StaticEventRepository().getAll();

  return {
    props: {
      talks,
      events,
    },
  };
}
