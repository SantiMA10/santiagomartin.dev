<template>
  <main class="flex items-center flex-col">
    <AboutMe class="mt-10"/>
    <MyTalks class="mt-10"/>
    <MySideProjects class="mt-10"/>
  </main>
</template>

<script>
import AboutMe from '~/components/AboutMe'
import MyTalks from '~/components/MyTalks'
import MySideProjects from '~/components/MySideProjects'

export default {
  components: {
    AboutMe,
    MyTalks,
    MySideProjects
  }
}
</script>

<style>
</style>
