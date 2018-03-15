<template>
  <div>
    <header-bar></header-bar>
    <div style="height: 1.067rem;"></div>
    专栏
    <div style="height: 1.067rem;"></div>
    <foot-bar></foot-bar>
  </div>
</template>
<script>
  import header from '../components/header'
  import footer from '../components/footer.vue'
  export default {
    components: {
      'header-bar': header,
      'foot-bar': footer
    },
    data () {
      return {}
    },
    created () {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
</style>
