<template>
  <div class="full" :data-dir="direction">
    <transition name="slide-left">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        transitionName: 'slide-right'  // 默认动态路由变化为slide-right
      }
    },
    computed: {
      ...mapState([
        'direction'
      ])
    },
    watch: {
      '$route' (to, from) {
        /*const toDepth = to.path.split('/').length
         const fromDepth = from.path.split('/').length
         this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'*/
        console.log(from)
        console.log(to)
        const fromOrder = from.meta.order || 0
        const toOrder = to.meta.order || 1
        this.transitionName = fromOrder < toOrder ? 'slide-left' : 'slide-right'
      }
    }
  }
</script>
<style lang="scss">
  @import './style/common';
  .router-fade-enter-active, .router-fade-leave-active{
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active{
    opacity: 0;
  }
  .bodys{ position: absolute; top: 82px; left: 0; right: 0; background: #fff;
    transition: transform 1s cubic-bezier(.55, 0, .1, 1);
  }
  .slide-left-enter-active, .slide-left-leave-active{
    -webkit-transition: -webkit-transform .4s cubic-bezier(.55, 0, .1, 1);
    transition: -webkit-transform .4s cubic-bezier(.55, 0, .1, 1);
    transition: transform .4s cubic-bezier(.55, 0, .1, 1);
    transition: transform .4s cubic-bezier(.55, 0, .1, 1), -webkit-transform .4s cubic-bezier(.55, 0, .1, 1);
  }
  .slide-left-enter{ -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0) }
  .slide-right-enter{ -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }
  .slide-right-leave-active{ -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0) }
  .slide-left-leave-active{ -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }
</style>
