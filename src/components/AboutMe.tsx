import Link from "next/link";

interface Props {
  live: boolean;
}

export function AboutMe({ live }: Props) {
  return (
    <section id="aboutme" className="mt-10">
      <h1 className="mb-4">
        Hi 👋🏻, I'm Santi
        {live && (
          <span v-if="live">
            {" "}
            and you can watch me live on{" "}
            <a href="https://twitch.tv/santima10" target="_blank">
              Twitch{" "}
            </a>
            now <div className="circle red inline-block" />
          </span>
        )}
        .
      </h1>
      <p className="mb-2">
        I'm a software engineer who lives in Gijón, Asturias.
      </p>
      <p>
        What to know what am I doing now? Visit <Link href="/now">/now</Link>
      </p>
    </section>
  );
}
