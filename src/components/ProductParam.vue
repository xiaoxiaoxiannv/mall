<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">
        小米8
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
  name: "ProductParam"
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
  .container{
    @include flex();
    .pro-title{
      font-size: 18px;
      font-weight: bold;
      color:$colorB;
    }
    .pro-params{
      font-size: 14px;
      span{
        margin: 0 10px;
      }
      a{
        color:$colorC;
      }
    }
  }
}
</style>