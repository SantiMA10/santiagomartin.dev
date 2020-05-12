import Head from "next/head";
import { getPostFromMedium } from "../services/getPostFromMedium";
import { BlogPosts } from "../components/BlogPosts";
import { AboutMe } from "../components/AboutMe";
import { getSideProjects } from "../services/getSideProjects";
import { SideProjects } from "../components/SideProjects";
import { getLiveState } from "../services/getLiveStatus";
import { Community } from "../components/Community";
import { getTalks } from "../services/getTalks";
import { Layout } from "../components/Layout";
import { getEvents } from "../services/getEvents";
import { useState, useEffect } from "react";

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
  const { talks } = await getTalks();
  const { events } = await getEvents();

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
