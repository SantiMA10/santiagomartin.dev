import { PostEntity } from "../entities/Post";

interface Props {
  posts: PostEntity[];
}

export function BlogPosts({ posts }: Props) {
  return (
    <section id="blog-posts" className="w-3/4 mt-5">
      <h1 className="mb-4 font-bold">My blog posts</h1>
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
    </section>
  );
}
