import { PostEntity } from "../entities/Post";
import { Features } from "../config/Features";
import Link from "next/link";

interface Props {
  posts: PostEntity[];
  limit?: number;
}

export function BlogPosts({ posts, limit }: Props) {
  return (
    <section id="blog-posts" className="mt-5">
      <h1 className="mb-4 font-bold">My blog posts</h1>
      <ul className="list-reset">
        {posts.slice(0, limit).map(({ key, url, time, title }) => (
          <li key={key} className="sm:ml-5 mb-2">
            📝 {time} - <a href={url}>{title}</a>
          </li>
        ))}

        <li className="sm:ml-5 mb-2">
          <Link href="/blog">
            <a className="mb-2">More...</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
