<template>
  <section id="talks" class="w-3/4">
    <h1 class="mb-4 font-bold">
      My blog posts
    </h1>
    <ul v-if="lastest.length > 0" class="list-reset">
      <li
        v-for="{ title, url, time, key } in lastest"
        :key="key"
        class="sm:ml-5 mb-2"
      >
        📝 {{ time | formatTime }} -
        <a :href="url" target="_blank">{{ title }}</a>
      </li>
    </ul>
    <p v-else>
      Ups... something happens with the Medium's API, you can check my
      <a target="_blank" href="https://medium.com/@Santi">Medium</a> directly.
    </p>
  </section>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  filters: {
    formatTime(time) {
      return DateTime.fromMillis(time).toFormat('MMM yyyy')
    }
  },
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  computed: {
    lastest() {
      return (
        Object.keys(this.posts)
          .map(key => {
            const { title, firstPublishedAt, uniqueSlug } = this.posts[key]
            return {
              time: firstPublishedAt,
              url: `https://medium.com/@Santi/${uniqueSlug}`,
              key,
              title
            }
          })
          // get the last 3 post
          .slice(0, 3)
      )
    }
  }
}
</script>
