<template>
  <section id="talks" class="w-3/4">
    <h1 class="mb-4">
      Talks
    </h1>
    <ul class="list-reset">
      <li
        v-for="{ talk, time, event } in talks"
        :key="time"
        class="sm:ml-5 mb-2"
      >
        🗣 {{ time | formatTime }} - <MyLink :link="event" /> -
        <MyLink :link="talk" />
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
      talks: [
         {
          time: 1563231600000,
          event: {
            name: 'TLP Innova'
          },
          talk: {
            name: '¿Por qué elegir Firebase? 🔥',
            url:
              'http://bit.ly/FirebaseTLP2019'
          }
        },
        {
          time: 1544781600000,
          event: {
            name: 'Internal training in Simbiosys'
          },
          talk: {
            name: 'git 101',
            url:
              'https://docs.google.com/presentation/d/1Y929evMqLNIvFqPMd9Ei02ub7gMA_oRTVSvFb-PFHqE/edit?usp=sharing'
          }
        },
        {
          time: 1533826800000,
          event: {
            name: 'Build Actions for Your Community',
            url: 'https://www.meetup.com/GDG-Asturias/events/248395884/'
          },
          talk: {
            name: 'Getting started with Actions on Google',
            url:
              'https://docs.google.com/presentation/d/1D9v0RWnFus1GsTyZorugH9BcgpCjsbAWy90XPwwO7GY/edit?usp=sharing'
          }
        },
        {
          time: 1525791600000,
          event: {
            name: 'Google I/O Extended 2018',
            url: 'https://www.meetup.com/GDG-Asturias/events/249222664/'
          },
          talk: {
            name: 'Android Things',
            url:
              'https://docs.google.com/presentation/d/1oaN5EAumVNJ8BrJjdg5Dxt3KOM3UWH7G7uwv1nZb5qg/edit?usp=sharing'
          }
        }
      ]
    }
  }
}
</script>
