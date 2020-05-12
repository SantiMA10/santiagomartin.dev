import { SideProject } from "../entities/SideProject";

interface Props {
  projects: SideProject[];
  limit?: number;
}

export function SideProjects({ projects, limit }: Props) {
  return (
    <section id="sideprojects" className="mt-5">
      <h1 className="mb-4 font-bold">Side projects</h1>
      <ul className="list-reset">
        {projects
          .slice(limit + 1 ?? 0)
          .map(({ id, description, code, title }) => (
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
      </ul>
    </section>
  );
}
