<template>
  <section id="aboutme" class="w-3/4">
    <h1 class="mb-4">
      Hi 👋🏻, I'm Santi<span v-if="live">
        and you can watch me live on
        <a href="https://twitch.tv/santima10" target="_blank">Twitch</a>
        now</span
      >.
    </h1>
    <p class="mb-2">
      I'm a software engineer who lives in Gijón, Asturias.
    </p>
    <p class="mb-2">
      Currently I work for a company called
      <a target="_blank" href="https://privacycloud.com">Privacy Cloud</a>,
      co-organize
      <a target="_blank" href="https://www.meetup.com/es-ES/GDG-Asturias"
        >GDG Asturias</a
      >
      and I have fun coding some
      <a href="#sideprojects">side projects</a>.
    </p>
    <p class="mb-2">
      I also play basketball 🏀 with some friends on every time I can.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      live: false
    };
  },
  async mounted() {
    const { data } = await fetch(
      "https://api.twitch.tv/helix/streams?user_login=santima10",
      {
        headers: { "Client-ID": process.env.NUXT_ENV_TWITCH_CLIENT_ID }
      }
    ).then(res => res.json());

    this.live = data?.length > 0;
  }
};
</script>
