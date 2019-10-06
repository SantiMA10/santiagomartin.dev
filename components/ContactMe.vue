<template>
  <section id="me" class="w-3/4">
    <h1 class="mb-4 font-bold">
      Contact me
    </h1>
    <ul class="list-reset">
      <li
        v-for="(socialNetwork, index) in socialNetworks"
        :key="index"
        class="sm:ml-5 mb-2"
      >
        <MyLink :link="socialNetwork" />
      </li>
    </ul>
  </section>
</template>

<script>
import MyLink from './MyLink'
import { DateTime } from 'luxon'

export default {
  components: {
    MyLink
  },
  filters: {
    formatTime(time) {
      return DateTime.fromMillis(time).toFormat('MMM yyyy')
    }
  },
  data() {
    return {
      socialNetworks: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/SantiMA10'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/santiago-martin-agra/'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/SantiMA10'
        },
        {
          name: 'Email',
          url: 'mailto:hi@santiagomartin.dev'
        }
      ]
    }
  }
}
</script>
