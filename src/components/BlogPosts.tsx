import { PostEntity } from "../entities/Post";

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
            <a href={url} target="_blank">
              {title}
            </a>
          </li>
        ))}

        <li className="sm:ml-5 mb-2">
          <a href="https://medium.com/@santi" target="_blank" className="mb-2">
            More...
          </a>
        </li>
      </ul>
    </section>
  );
}
