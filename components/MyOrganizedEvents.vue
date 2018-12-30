<template>
  <section
    id="events"
    class="w-3/4">
    <h1 class="mb-2">
      Organized events
    </h1>
    <ul class="list-reset">
      <li
        v-for="{time, event} in events"
        :key="time"
        class="ml-5"
      >
        🗓 {{ time | formatTime }} - <MyLink :link="event"/>
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
      events: [
        {
          time: 1543654800000,
          event: {
            name: 'DevFest Asturias 2018',
            url: 'https://www.meetup.com/GDG-Asturias/events/254241974/'
          }
        },
        {
          time: 1523692800000,
          event: {
            name: 'Women Techmakers Asturias 2018',
            url: 'https://www.meetup.com/GDG-Asturias/events/246868757/'
          }
        }
      ]
    }
  }
}
</script>
