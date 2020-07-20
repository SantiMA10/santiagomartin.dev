import Head from "next/head";
import { useEffect, useState } from "react";
import { AboutMe } from "../components/AboutMe";
import { BlogPosts } from "../components/BlogPosts";
import { Community } from "../components/Community";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { StaticEventRepository } from "../repositories/StaticEventRepository";
import { StaticTalkRepository } from "../repositories/StaticTalkRepository";
import { GetLiveStatus } from "../useCases/GetLiveStatus";
import { GetPosts } from "../useCases/GetPosts";
import { GetSideProjects } from "../useCases/GetSideProjects";

export default function Home({ posts, projects, talks, events }) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    const getLive = async () => {
      const {
        data: { live },
      } = await new GetLiveStatus().perform();

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
        <BlogPosts posts={posts} limit={4} />
        <Community talks={talks} events={events} limit={4} />
        <SideProjects projects={projects} limit={4} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: posts } = await new GetPosts().perform();
  const { data: projects } = await new GetSideProjects().perform();
  const talks = await new StaticTalkRepository().getAll();
  const events = await new StaticEventRepository().getAll();

  return {
    props: {
      posts,
      projects,
      talks,
      events,
    },
  };
}
