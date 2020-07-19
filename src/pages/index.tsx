import Head from "next/head";
import { useEffect, useState } from "react";
import { AboutMe } from "../components/AboutMe";
import { BlogPosts } from "../components/BlogPosts";
import { Community } from "../components/Community";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { StaticEventRepository } from "../repositories/StaticEventRepository";
import { StaticTalkRepository } from "../repositories/StaticTalkRepository";
import { getLiveState } from "../services/getLiveStatus";
import { getPostFromMedium } from "../services/getPostFromMedium";
import { getSideProjects } from "../services/getSideProjects";

export default function Home({ posts, projects, talks, events }) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    const getLive = async () => {
      const { live } = await getLiveState();

      setLive(live);
    };

    getLive();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Santiago Martín Agra | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-grow">
        <AboutMe live={live} />
        <BlogPosts posts={posts} />
        <Community talks={talks} events={events} limit={4} />
        <SideProjects projects={projects} limit={4} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts } = await getPostFromMedium();
  const { projects } = await getSideProjects();
  const { live } = await getLiveState();
  const talks = await new StaticTalkRepository().getAll();
  const events = await new StaticEventRepository().getAll();

  return {
    props: {
      posts,
      projects,
      live,
      talks,
      events,
    },
  };
}
