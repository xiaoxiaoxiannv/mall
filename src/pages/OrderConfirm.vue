<template>
  <div class="order-confirm">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">收货地址</h2>
            <div class="addr-list clearfix">
              <div class="addr-info">
                <h2>Admin</h2>
                <div class="phone">18600000000</div>
                <div class="street">北京市海淀区百度科技园</div>
                <div class="action">
                  <a href="javascript:;" class="fl">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr">
                    <svg class="icon icon-edit">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="addr-add">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
            <div class="item-good">
              <h2>商品</h2>
              <ul>
                <li>
                  <div class="good-name">
                    <img src="">
                    <span>小米CC9e 3200万+4800万 前后双旗舰相机</span>
                  </div>
                  <div class="good-price">1299元x1</div>
                  <div class="good-total">1299元</div>
                </li>
              </ul>
            </div>
            <div class="item-shipping">
              <h2>配送方式</h2>
              <span>包邮</span>
            </div>
            <div class="item-invoice">
              <h2>发票</h2>
              <a href="javascript:;">电子发票</a>
              <a href="javascript:;">个人</a>
            </div>
            <div class="detail">
              <div class="item">
                <span class="item-name">商品件数:</span>
                <span class="item-val">1件</span>
              </div>
              <div class="item">
                <span class="item-name">商品总价:</span>
                <span class="item-val">1299元</span>
              </div>
              <div class="item">
                <span class="item-name">优惠活动:</span>
                <span class="item-val">0元</span>
              </div>
              <div class="item">
                <span class="item-name">运费:</span>
                <span class="item-val">0元</span>
              </div>
              <div class="item">
                <span class="item-name">应付总额:</span>
                <span class="item-val">1299元</span>
              </div>
            </div>
            <div class="btn-group">
              <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
              <a href="javascript:;" class="btn btn-large">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderConfirm"
}
</script>

<style lang="scss">
.order-confirm {
  .wrapper {
    background: #F5F5F5;
    padding-top: 30px;
    padding-bottom: 84px;

    .order-box {
      background: #ffffff;
      padding-left: 40px;
      padding-bottom: 40px;

      .addr-title {
        font-size: 20px;
        color: #333333;
        font-weight: 200;
        margin-bottom: 21px;
      }

      .item-address {
        padding-top: 38px;

        .addr-list {
          .addr-info, .addr-add {
            box-sizing: border-box;
            float: left;
            width: 271px;
            height: 180px;
            border: 1px solid #e5e5e5;
            margin-right: 15px;
            padding: 15px 24px;
            font-size: 14px;
            color: #757575;
          }

          .addr-info {
            cursor: pointer;

            h2 {
              height: 27px;
              font-size: 18px;
              font-weight: 300;
              color: #333333;
              margin-bottom: 10px;
            }

            .street {
              height: 50px;
            }

            .action {
              height: 50px;
              line-height: 50px;

              .icon {
                width: 20px;
                height: 20px;
                fill: #666666;
                vertical-align: middle;

                &:hover {
                  fill: #FF6600;
                }
              }
            }

            &.checked {
              border: 1px solid #FF6600;
            }
          }

          .addr-add {
            text-align: center;
            color: #999999;
            cursor: pointer;

            .icon-add {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background: url("/imgs/icon-add.png") #E0E0E0 no-repeat center;
              background-size: 14px;
              margin: 45px auto 10px;
            }
          }
        }
      }

      .item-good {
        margin-top: 34px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 12px;

        h2 {
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 5px;
        }

        li {
          display: flex;
          align-items: center;
          height: 40px;
          line-height: 40px;
          margin-top: 10px;
          font-size: 16px;
          color: #333333;

          .good-name {
            flex: 5;

            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
            }
          }

          .good-price {
            flex: 2;
          }

          .good-total {
            padding-right: 44px;
            color: #FF6600;
          }
        }
      }

      .item-shipping, .item-invoice {
        margin-top: 31px;
        line-height: 20px;

        h2 {
          margin-right: 71px;
          display: inline-block;
          font-size: 20px;
          width: 80px;
        }

        span, a {
          font-size: 16px;
          color: #FF6600;
          margin-right: 23px;
        }
      }

      .detail {
        padding: 50px 44px 33px 0;
        border-bottom: 1px solid #F5F5F5;
        text-align: right;
        font-size: 16px;
        color: #666666;

        .item-val {
          color: #FF6600;
          display: inline-block;
          width: 100px;
        }

        .item {
          line-height: 15px;
          margin-bottom: 12px;
        }

        .item-total {
          .item-val {
            font-size: 28px;
          }
        }
      }
      .btn-group{
        margin-top: 37px;
        text-align: right;
      }
    }
  }
}
</style>