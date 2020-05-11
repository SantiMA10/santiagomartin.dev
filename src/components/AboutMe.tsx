interface Props {
  live: boolean;
}

export function AboutMe({ live }: Props) {
  return (
    <section id="aboutme" className="w-3/4 mt-10">
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
      <p className="mb-2">
        Currently I work for a startup called{" "}
        <a target="_blank" href="https://privacycloud.com">
          PrivacyCloud
        </a>
        , co-organize{" "}
        <a target="_blank" href="https://www.meetup.com/es-ES/GDG-Asturias">
          GDG Asturias{" "}
        </a>
        and I have fun coding some <a href="#sideprojects">side projects</a>.
      </p>
      <p className="mb-2">
        I also play basketball 🏀 with some friends on every time I can.
      </p>
    </section>
  );
}
