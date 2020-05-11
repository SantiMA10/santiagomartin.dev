import Head from "next/head";
import { getPostFromMedium } from "../services/getPostFromMedium";
import { BlogPosts } from "../components/BlogPosts";
import { AboutMe } from "../components/AboutMe";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Santiago Martín Agra | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center flex-col">
        <AboutMe live={true} />
        <BlogPosts posts={posts} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { posts } = await getPostFromMedium();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
