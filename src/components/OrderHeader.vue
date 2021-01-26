<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{ title }}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript">admin</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderHeader",
  props:{
    title:String
  }
}
</script>

<style lang="scss">
.order-header {
  padding: 30px 0;
  .header-logo {
    float: left;
    margin-right: 54px;
  }

  .title {
    height: 55px;
    line-height: 55px;
    float: left;

    h2 {
      font-size: 28px;
      color: #333333;

      span {
        margin-left: 17px;
        font-size: 14px;
        color: #999999;
        font-weight:bold;
      }
    }
  }

  .username {
    height: 55px;
    line-height: 55px;
    float: right;
    a{
      font-size: 16px;
      color: #666666;
    }
  }
}
</style>