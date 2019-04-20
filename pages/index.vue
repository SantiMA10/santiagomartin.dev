<template>
  <main class="flex items-center flex-col">
    <AboutMe class="mt-10" />
    <MyBlogPosts :posts="posts" class="mt-5" />
    <MyTalks class="mt-5" />
    <MySideProjects class="mt-5" />
    <MyOrganizedEvents class="mt-5" />
    <ContactMe class="mt-5" />
  </main>
</template>

<script>
import AboutMe from '~/components/AboutMe'
import MyTalks from '~/components/MyTalks'
import MyBlogPosts from '~/components/MyBlogPosts'
import MySideProjects from '~/components/MySideProjects'
import MyOrganizedEvents from '~/components/MyOrganizedEvents'
import ContactMe from '~/components/ContactMe'

export default {
  components: {
    AboutMe,
    MyTalks,
    MyBlogPosts,
    MySideProjects,
    MyOrganizedEvents,
    ContactMe
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://medium.com/@santi/latest?format=json'
    )
    const { payload } = JSON.parse(data.replace('])}while(1);</x>', ''))
    return { posts: payload.references.Post }
  }
}
</script>

<style>
@media (prefers-color-scheme: dark) {
  body {
    color: white;
    background: black;
  }
}
</style>
