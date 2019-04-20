<template>
  <section id="sideprojects" class="w-3/4">
    <h1 class="mb-4">
      Side projects
    </h1>
    <ul class="list-reset">
      <li
        v-for="({ description, code, name }, index) in projects"
        :key="index"
        class="sm:ml-5 mb-2"
      >
        👨🏻‍💻
        <MyLink :link="name" /> - {{ description }}
        <span v-if="code"> - <a :href="code" target="_blank">GitHub</a> </span>
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
  data() {
    return {
      projects: [
        {
          name: {
            name: 'Excuse generator',
            url:
              'https://alexa.amazon.es/spa/index.html#skills/dp/B07HY37SP6/?ref=skill_dsk_skb_sr_0&qid=1546168908'
          },
          description: 'A simple Alexa Skill'
        },
        {
          name: {
            name: 'E-Sports Calendar',
            url: 'https://esportscalendar.app'
          },
          description: 'A spanish esports calendar app'
        },
        {
          name: {
            name: 'Share Links',
            url: 'https://sharelinks.app'
          },
          description: 'Create and share link lists, quick and easy'
        },
        {
          name: {
            name: 'Excuse generator',
            url:
              'https://alexa.amazon.es/spa/index.html#skills/dp/B07HY37SP6/?ref=skill_dsk_skb_sr_0&qid=1546168908'
          },
          description: 'A simple Action on Google',
          code: 'https://github.com/SantiMA10/excuse-generator'
        },
        {
          name: {
            name: 'YouWatch'
          },
          description: 'A watchface for Pebble',
          code: 'https://github.com/SantiMA10/YouWatch'
        }
      ]
    }
  }
}
</script>
