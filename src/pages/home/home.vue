<template>
  <div class="full">
    <header-bar></header-bar>
    <div style="height: 1.067rem;"></div>
    <list-item></list-item>
    <div style="height: 1.067rem;"></div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
  import header from '../../components/header'
  import footer from '../../components/footer.vue'
  import list from '../../components/list.vue'

  export default {
    components: {
      'header-bar': header,
      'footer-bar': footer,
      'list-item': list
    },
    data () {
      return {}
    },
    created () {},
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixins";

  /*.header {
    background: #fff;
    overflow-x: auto;
    white-space: nowrap;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
    ul {
      width: 200%;
      overflow-x: scroll;
    }
    li.item {
      a {
        display: block;
        padding: 0 1.24rem;
        height: 1.067rem;
        line-height: 1.067rem;
        color: #111;
        @include font-dpr(16px);
      }
      &.active a {
        border-bottom: 2px solid $main-color;
        color: $main-color;
      }
    }

  }*/
</style>
