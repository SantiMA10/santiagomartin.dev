import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/blog/CodeBlock";
import Heading from "../../components/blog/Heading";
import { Image } from "../../components/blog/Image";
import ListItem from "../../components/blog/ListItem";
import Paragraph from "../../components/blog/Paragraph";
import { Layout } from "../../components/Layout";
import { PostEntity } from "../../entities/Post";
import { MarkdownPostRepository } from "../../repositories/MarkdownPostRepository";

interface Props {
  post: PostEntity;
}

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post?.title} | santiagomartin.dev</title>
        <meta name="description" content={post?.spoiler}></meta>
        <meta name="og:description" content={post?.spoiler}></meta>
        <meta name="og:title" content={post?.title}></meta>
      </Head>
      <Layout showGoBack>
        <Heading level={1}>{post?.title}</Heading>
        <span>Published at: {post?.time}</span>
        <div className="flex flex-wrap mb-4">
          {post?.tags.map((tag) => (
            <span className="p-1 bg-blue-900 mr-2 rounded mt-2">
              #{tag.replace(/ /g, "")}
            </span>
          ))}
        </div>

        <ReactMarkdown
          source={post?.body}
          renderers={{
            code: CodeBlock,
            heading: Heading,
            image: Image,
            paragraph: Paragraph,
            listItem: ListItem,
          }}
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await new MarkdownPostRepository().getBySlug(
    context.params.slug.toString()
  );

  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts = await new MarkdownPostRepository().getAll();

  return {
    paths: posts.map((posts) => posts.url),
    fallback: true,
  };
}
