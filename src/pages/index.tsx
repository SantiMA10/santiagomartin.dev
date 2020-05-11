import Head from "next/head";
import { getPostFromMedium } from "../services/getPostFromMedium";
import { BlogPosts } from "../components/BlogPosts";
import { AboutMe } from "../components/AboutMe";
import { getSideProjects } from "../services/getSideProjects";
import { SideProjects } from "../components/SideProjects";
import { getLiveState } from "../services/getLiveStatus";

export default function Home({ posts, projects, live }) {
  return (
    <div>
      <Head>
        <title>Santiago Martín Agra | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center flex-col">
        <AboutMe live={live} />
        <BlogPosts posts={posts} />
        <SideProjects projects={projects} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { posts } = await getPostFromMedium();
  const { projects } = await getSideProjects();
  const { live } = await getLiveState();

  return {
    props: {
      posts,
      projects,
      live,
    }, // will be passed to the page component as props
  };
}
