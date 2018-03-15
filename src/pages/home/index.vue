<template>
  <div class="home">
    <h3 class="home-title animated slideInLeft">欢迎来到我的后花园</h3>
    <div class="home-box">
      <div class="home-center">
        <p class=" animated bounceIn">酸菜红豆</p>
        <p class="home-center-description animated slideInLeft">一个写技术与生活的博客</p>
      </div>
      <p class="home-description animated zoomInUp">吴映才的后花园</p>
    </div>
    <a class="home-btn animated fadeInUpBig" href="javascript:;" @click="$router.push('/home')">去逛逛</a>
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
  @import "../../style/mixins";
  .home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    // 渐变
    /*background: #FC5C7D linear-gradient(to top, #0d1d61, #a90065);*/
    // 显示背景为方格
    /*background: linear-gradient(45deg, rgba(255, 255, 255, 0) 48%,
    rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 52%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0) 52%);
    background-size: 1em 1em;
    background-color: #000;*/
    background: linear-gradient(45deg, #7fb5cc, #cc83ae);
    background: linear-gradient(145deg, #099, #ff7373);
  }

  .home-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -60%, 0);
    text-align: center;
  }

  .home-title {
    @include font-dpr(26px);
    color: #5ccccc;
    text-align: center;
    margin-top: 3rem;
  }

  .home-center {
    padding: 15px 30px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    p {
      @include font-dpr(24px);
      color: #fff;
    }
    .home-center-description {
      @include font-dpr(14px);
    }
  }

  .home-description {
    color: #fff;
    margin-top: .133rem;
    @include font-dpr(14px)
  }

  .home-btn {
    display: block;
    width: 4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2rem;
    margin: auto;
    background: rgba(0, 0, 0, .35);
    color: #fff;
    @include border-radius;
    @include font-dpr(18px);
    text-align: center;
  }
</style>
