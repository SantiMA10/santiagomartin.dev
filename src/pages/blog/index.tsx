import Head from "next/head";
import { BlogPosts } from "../../components/BlogPosts";
import { Layout } from "../../components/Layout";
import { PostEntity } from "../../entities/Post";
import { GetPosts } from "../../useCases/GetPosts";

interface Props {
  posts: PostEntity[];
}

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog | santiagomartin.dev</title>
      </Head>
      <Layout showGoBack>
        <BlogPosts posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { data: posts } = await new GetPosts().perform();

  return {
    props: {
      posts,
    },
  };
}
