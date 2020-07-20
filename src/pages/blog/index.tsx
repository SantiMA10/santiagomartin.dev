import { Layout } from "../../components/Layout";
import { GetPosts } from "../../useCases/GetPosts";
import { PostEntity } from "../../entities/Post";
import Head from "next/head";

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
        <h1 className="mb-4 font-bold">My blog</h1>
        <h2 className="mb-4">Here you can find my thoughts about anythings</h2>
        <ul className="list-reset">
          {posts.map(({ key, url, time, title }) => (
            <li key={key} className="sm:ml-5 mb-2">
              📝 {time} -{" "}
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
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
