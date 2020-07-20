import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/blog/CodeBlock";
import Heading from "../../components/blog/Heading";
import { Image } from "../../components/blog/Image";
import { Layout } from "../../components/Layout";
import { PostEntity } from "../../entities/Post";
import { GetPosts } from "../../useCases/GetPosts";

interface Props {
  post: PostEntity;
}

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title} | santiagomartin.dev</title>
        <meta name="description" content={post.spoiler}></meta>
        <meta name="og:description" content={post.spoiler}></meta>
        <meta name="og:title" content={post.title}></meta>
      </Head>
      <Layout showGoBack>
        <Heading level={1}>{post.title}</Heading>
        <span>Published at: {post.time}</span>
        <div className="flex flex-wrap mb-4">
          {post.tags.map((tag) => (
            <span className="p-1 bg-blue-900 mr-2 rounded mt-2">
              #{tag.replace(/ /g, "")}
            </span>
          ))}
        </div>

        <ReactMarkdown
          source={post.body}
          renderers={{ code: CodeBlock, heading: Heading, image: Image }}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { data: posts } = await new GetPosts().perform();

  return {
    props: {
      post: posts[0],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/blog/hello-deno"],
    fallback: true,
  };
}
