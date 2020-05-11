import Head from "next/head";
import { getPostFromMedium } from "../services/getPostFromMedium";
import { BlogPosts } from "../components/BlogPosts";
import { AboutMe } from "../components/AboutMe";
import { getSideProjects } from "../services/getSideProjects";
import { SideProjects } from "../components/SideProjects";

export default function Home({ posts, projects }) {
  return (
    <div>
      <Head>
        <title>Santiago Martín Agra | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center flex-col">
        <AboutMe live={true} />
        <BlogPosts posts={posts} />
        <SideProjects projects={projects} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { posts } = await getPostFromMedium();
  const { projects } = await getSideProjects();

  return {
    props: {
      posts,
      projects,
    }, // will be passed to the page component as props
  };
}
