<template>
  <main class="flex items-center flex-col">
    <AboutMe class="mt-10"/>
    <MyTalks class="mt-10"/>
  </main>
</template>

<script>
import AboutMe from '~/components/AboutMe'
import MyTalks from '~/components/MyTalks'

export default {
  components: {
    AboutMe,
    MyTalks
  }
}
</script>

<style>
</style>
