<script>
export default {
  props: {
    link: {
      required: true,
      type: Object
    }
  },
  computed: {
    isMailTo() {
      return this.link.url.includes('mailto')
    }
  },
  render(h) {
    if (!this.link.url) {
      return h('span', this.link.name)
    }

    return h('a', {
      attrs: {
        href: this.link.url,
        target: this.isMailTo ? '' : '_blank'
      },
      domProps: {
        innerHTML: this.link.name
      }
    })
  }
}
</script>
