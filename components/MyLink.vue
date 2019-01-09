<script>
export default {
  props: {
    link: {
      required: true,
      type: Object
    }
  },
  render(h) {
    if (!this.link.url) {
      return h('span', this.link.name)
    }

    return h('a', {
      attrs: {
        href: this.link.url,
        target: '_blank'
      },
      domProps: {
        innerHTML: this.link.name
      }
    })
  }
}
</script>
