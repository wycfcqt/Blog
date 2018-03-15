<template>
  <footer class="footer flex flex-row flex-justify-between flex-align-center">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0">
      <defs>
        <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="profile">
          <defs>
            <path id="profile-regular.c151d62_a"
                  d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"></path>
            <mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_a"></use>
            </mask>
            <path id="profile-regular.c151d62_b"
                  d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
            <mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff">
              <use xlink:href="#profile-regular.c151d62_b"></use>
            </mask>
          </defs>
          <g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
            <use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"></use>
            <use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"></use>
          </g>
        </symbol>

        <symbol viewBox="0 0 38 38" id="profileActive">
          <defs>
            <linearGradient id="profile.dbc5ebf_a" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#2BAEFF"></stop>
              <stop offset="100%" stop-color="#0095FF"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd"
                d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path>
        </symbol>

      </defs>
    </svg>
    <a href="javascript:;" @click="$router.push('/home')" :class="[$route.meta.order === 1 ? 'active' : '']"
       class="flex flex-col flex-justify-between flex-align-center">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,3 2,33 11,33 11,63 23,63 23,47 39,47 
	39,63 51,63 51,33 62,33 "/>
</svg>
      <span>首页</span>
    </a>
    <a href="javascript:;" @click="$router.push('/lan')" :class="[$route.meta.order === 2 ? 'active' : '']"
       class="flex flex-col flex-justify-between flex-align-center">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,3 2,33 11,33 11,63 23,63 23,47 39,47
	39,63 51,63 51,33 62,33 "/></svg>
      <span>专栏</span>
    </a>
    <a href="javascript:;" @click="$router.push('/about')" :class="[$route.meta.order === 3 ? 'active' : '']"
       class="flex flex-col flex-justify-between flex-align-center">
      <svg class="icon_style">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
             :xlink:href="$route.path.indexOf('profile') !== -1? '#profileActive' : '#profile'"></use>
      </svg>
      <span>关于</span>
    </a>
  </footer>
</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  @import "../style/mixins";

  .footer {
    width: 100%;
    height: 1.067rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 10;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, .3);
    a {
      height: 100%;
      flex: 1;
      color: #666;
      text-align: center;
      span {
        display: block;
        @include font-dpr(12px);
      }
      &.active span {
        color: $main-light;
      }
      svg {
        display: block;
        width: 0.533rem;
        height: 0.533rem;
        color: teal;
      }
    }
  }
</style>
