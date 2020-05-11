import { SideProject } from "../entities/SideProject";

interface Props {
  projects: SideProject[];
}

export function SideProjects({ projects }: Props) {
  return (
    <section id="sideprojects" className="w-3/4 mt-5">
      <h1 className="mb-4 font-bold">Side projects</h1>
      <ul className="list-reset">
        {projects.map(({ id, description, code, title }) => (
          <li key={id} className="sm:ml-5 mb-2">
            👨🏻‍💻 <a href={title.url}>{title.text}</a> - {description}
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
