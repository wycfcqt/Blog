<template>
  <header class="header" ref="wrapper">
    <ul class="container flex flex-row flex-justify-start flex-align-center">
      <li class="item" :class="[item.defaultBar ? 'active' : '']" @click="changeTabs(item)"
          v-for="(item, index) in navBar">
        <a href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </header>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        navBar: [
          {
            id: 1, // id
            defaultBar: true,
            name: '前端', // 名称
            type: 1, // 分类类型，一级分类
            description: '前端知识合集' // 描述
          },
          {
            id: 2, // id
            defaultBar: false,
            name: '后端', // 名称
            type: 1, // 分类类型，一级分类
            description: '后端知识合集' // 描述
          },
          {
            id: 3, // id
            defaultBar: false,
            name: '生活', // 名称
            type: 1, // 分类类型，一级分类
            description: '后端知识合集' // 描述
          },
          {
            id: 4, // id
            defaultBar: false,
            name: '工作', // 名称
            type: 1, // 分类类型，一级分类
            description: '后端知识合集' // 描述
          },
          {
            id: 5, // id
            defaultBar: false,
            name: '学习', // 名称
            type: 1, // 分类类型，一级分类
            description: '后端知识合集' // 描述
          }
        ]
      }
    },
    created () {},
    mounted () {
      /*let scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      })*/
    },
    methods: {
      changeTabs (item) {
        this.navBar.forEach(items => {
          if (items.id === item.id) {
            items.defaultBar = true
          } else {
            items.defaultBar = false
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/mixins";

  .header {
    background: #fff;
    overflow-x: auto;
    white-space: nowrap;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid $main-color;
    /*box-shadow: 0 2px 10px rgba(0,0,0,.3);*/
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
        /*border-bottom: 2px solid $main-color;*/
        color: $main-color;
      }
    }

  }
</style>
