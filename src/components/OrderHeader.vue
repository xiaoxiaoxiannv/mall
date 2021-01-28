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
        <a href="javascript">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "OrderHeader",
  props:{
    title:String
  },
  computed:{
    ...mapState(['username'])
  }
}
</script>

<style lang="scss">
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #FF6600;
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
        font-weight:200;
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