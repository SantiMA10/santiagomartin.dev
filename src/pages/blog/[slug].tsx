import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "../../components/blog/CodeBlock";
import Heading from "../../components/blog/Heading";
import { Image } from "../../components/blog/Image";
import Link from "../../components/blog/Link";
import ListItem from "../../components/blog/ListItem";
import Paragraph from "../../components/blog/Paragraph";
import Quote from "../../components/blog/Quote";
import { Layout } from "../../components/Layout";
import { PostEntity } from "../../entities/Post";
import { MarkdownPostRepository } from "../../repositories/MarkdownPostRepository";

interface Props {
  post: PostEntity;
}

export default function BlogPost({ post }: Props): ReactElement {
  const title = `${post?.title} | santiagomartin.dev`;
  const description = post?.spoiler;
  const url = `https://santiagomartin.dev${post?.url}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="og:description" content={description}></meta>
        <meta name="og:title" content={title}></meta>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@SantiMA10"></meta>
        <meta name="twitter:creator" content="@SantiMA10"></meta>
        <link rel="canonical" href={url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context":"https://schema.org/",
      "@type":"Article",
      "name":"${title}",
      "abstract": "${post?.spoiler}",
      "author": { "@type": "Person", "@id": "SantiMA10", "name": "Santi M.A." },
      "datePublished": "${post?.time}",
      "dateModified": "${post?.time}",
      "description": "${post?.spoiler}",
      "headline": "${title}",
      "inLanguage": "Spanish",
      "url": "${url}"
    }`,
          }}
        ></script>
      </Head>
      <Layout showGoBack>
        <Heading level={1}>{post?.title}</Heading>
        <span>Published at: {post?.time}</span>
        <div className="flex flex-wrap mb-4">
          {post?.tags.map((tag) => (
            <span
              key={tag}
              className="p-1 bg-blue-100 dark:bg-blue-900 mr-2 rounded mt-2"
            >
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
            blockquote: Quote,
            link: Link,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await new MarkdownPostRepository().getAll();

  return {
    paths: posts.map((posts) => posts.url),
    fallback: true,
  };
};
