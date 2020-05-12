import { SideProject } from "../entities/SideProject";
import Link from "next/link";

interface Props {
  projects: SideProject[];
  limit?: number;
}

export function SideProjects({ projects, limit }: Props) {
  return (
    <section id="sideprojects" className="mt-5">
      <h1 className="mb-4 font-bold">Side projects</h1>
      <ul className="list-reset">
        {projects.slice(0, limit).map(({ id, description, code, title }) => (
          <li key={id} className="sm:ml-5 mb-2">
            👨🏻‍💻{" "}
            <a href={title.url} target="_blank">
              {title.text}
            </a>{" "}
            - {description}
            {code && (
              <span>
                {" "}
                -{" "}
                <a href={code} target="_blank">
                  GitHub
                </a>
              </span>
            )}
          </li>
        ))}
        {limit && (
          <li className="sm:ml-5 mb-2">
            <Link href="/side-projects">
              <a className="mb-2">More...</a>
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
