<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-params">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductParam",
  props:{
    title:String
  },
  data() {
return{
  isFixed:false
}
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight,false)
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background: $colorG;
  z-index: 10;
  &.is_fixed{
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }

  .container {
    @include flex();

    .pro-title {
      font-size: 18px;
      font-weight: bold;
      color: $colorB;
    }

    .pro-params {
      font-size: 14px;

      span {
        margin: 0 10px;
      }

      a {
        color: $colorC;
      }
    }
  }
}
</style>