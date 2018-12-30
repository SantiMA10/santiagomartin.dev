<template>
  <main class="flex items-center flex-col">
    <AboutMe class="mt-10"/>
    <MyTalks class="mt-10"/>
    <MySideProjects class="mt-10"/>
    <MyOrganizedEvents class="mt-10"/>
    <ContactMe class="mt-10"/>
  </main>
</template>

<script>
import AboutMe from '~/components/AboutMe'
import MyTalks from '~/components/MyTalks'
import MySideProjects from '~/components/MySideProjects'
import MyOrganizedEvents from '~/components/MyOrganizedEvents'
import ContactMe from '~/components/ContactMe'

export default {
  components: {
    AboutMe,
    MyTalks,
    MySideProjects,
    MyOrganizedEvents,
    ContactMe
  }
}
</script>

<style>
</style>
