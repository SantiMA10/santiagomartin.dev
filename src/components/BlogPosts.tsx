import { PostEntity } from "../entities/Post";
import { Features } from "../config/Features";
import Link from "next/link";

interface Props {
  posts: PostEntity[];
}

export function BlogPosts({ posts }: Props) {
  return (
    <section id="blog-posts" className="mt-5">
      <h1 className="mb-4 font-bold">My blog posts</h1>
      <ul className="list-reset">
        {posts.map(({ key, url, time, title }) => (
          <li key={key} className="sm:ml-5 mb-2">
            📝 {time} -{" "}
            <a href={url} target={Features.enableBlog() ? null : "_blank"}>
              {title}
            </a>
          </li>
        ))}

        <li className="sm:ml-5 mb-2">
          {Features.enableBlog() ? (
            <Link href="/blog">
              <a className="mb-2">More...</a>
            </Link>
          ) : (
            <a
              href="https://medium.com/@santi"
              target="_blank"
              className="mb-2"
            >
              More...
            </a>
          )}
        </li>
      </ul>
    </section>
  );
}
