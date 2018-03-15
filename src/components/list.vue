<template>
  <div class="list-box">
    <section class="list" v-for="item in Array(20)">
      <header class="list-header">
        <h2>CSS那些不为人知的秘密</h2>
      </header>
      <article class="list-description">
        这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述
        这里是描述这里是描述这里是描述
      </article>
      <footer class="list-footer flex flex-row flex-justify-between flex-align-center">
        <span>发布于 <em>2018-1-4</em></span><span>分类 <em>前端-html</em></span>
      </footer>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {},
    methods: {}
  }
</script>
<style lang="scss" scoped>
  @import "../style/mixins";

  .list {
    padding: .267rem;
    margin-bottom: .533rem;
    background: #fff;
    &:first-child {
      margin-top: .267rem;
    }
  }

  .list-header {
    padding-bottom: .1333rem;
    h2 {
      @include font-dpr(18px);
      font-weight: normal;
      color: #050505;
    }
  }

  .list-description {
    line-height: .64rem;
    @include font-dpr(14px);
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: .35rem 0;
  }

  .list-footer {
    color: #8590a6;
    font-size: .32rem;
  }
</style>
