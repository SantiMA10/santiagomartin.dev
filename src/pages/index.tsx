import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";

import { AboutMe } from "../components/AboutMe/AboutMe";
import { BlogPosts } from "../components/BlogPosts";
import { Community } from "../components/Community";
import { Layout } from "../components/Layout";
import { SideProjects } from "../components/SideProjects";
import { Event } from "../entities/Event";
import { PostEntity } from "../entities/Post";
import { SideProject } from "../entities/SideProject";
import { Talk } from "../entities/Talk";
import { StaticEventRepository } from "../repositories/StaticEventRepository";
import { StaticTalkRepository } from "../repositories/StaticTalkRepository";
import { GetLiveStatus } from "../useCases/GetLiveStatus";
import { GetPosts } from "../useCases/GetPosts";
import { GetSideProjects } from "../useCases/GetSideProjects";

interface Props {
  posts: PostEntity[];
  projects: SideProject[];
  talks: Talk[];
  events: Event[];
}

export default function Home(props: Props): ReactElement {
  const { posts, projects, talks, events } = props;
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

export const getStaticProps: GetStaticProps = async () => {
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
};
