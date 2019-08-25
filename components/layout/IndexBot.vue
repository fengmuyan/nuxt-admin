<template>
  <div class="IndexBot">
    <div class="container">
      <div class="top">
        <div class="topWrap">
          <ul>
            <li>
              <dl>
                <dt>关于我们</dt>
                <dd>关于居想</dd>
                <dd>居想头条</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>经典案例</dt>
                <dd>中国外交部</dd>
                <dd>首都机场T2航站楼</dd>
                <dd>顺义空港</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>常见问题</dt>
                <dd>产品问题</dd>
                <dd>业务问题</dd>
                <dd>使用手册</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>服务热线</dt>
                <dd class="first">400-6166-770</dd>
                <dd class="second">周一至周五 09:00-18:00</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>关于我们</dt>
                <dd>
                  <img src="@/assets/imgs/homepage/code.png" alt="二维码">
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="bot">
        <dl class="clearfix">
          <dt>媒体及商务合作：</dt>
          <dd>
            <i class="el-icon-phone"></i>010-6408 8271
          </dd>
          <dd>
            <i class="el-icon-message"></i>service@jx360.com
          </dd>
          <dd>
            <i class="el-icon-service"></i>在线客服
          </dd>
        </dl>
        <p>JX360.COM ©居想网所有权 京公网安备11010102001653号 京ICP证160118 京ICP备15034149号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexBot"
};
</script>
<style lang="scss">
.IndexBot {
  height: 402;
  background-color: #2b2a32;
  padding: 56px 0 16px 50px;
  .container {
    .top {
      .topWrap {
        height: 188px;
        ul {
          padding-left: 20px;
          height: 100%;
          li {
            float: left;
            height: 100%;
            dt {
              font-size: 16px;
              margin-bottom: 30px;
              color: #ccccca;
            }
            dd {
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              color: #666;
            }
          }
          li:first-child {
            width: 146px;
          }
          li:nth-child(2) {
            width: 180px;
          }
          li:nth-child(3) {
            width: 160px;
          }
          li:nth-child(4) {
            width: 308px;
            border-right: 1px solid #3f3f41;
            dd {
              height: 40px;
              line-height: 40px;
              color: #ccccca;
            }
            dd.first {
              font-size: 24px;
            }
            dd.second {
              font-size: 16px;
            }
          }
          li:last-child {
            margin-left: 68px;
          }
        }
      }
    }
    .bot {
      dl {
        margin-bottom: 16px;
        dd,
        dt {
          float: left;
          height: 70px;
          line-height: 70px;
          font-size: 16px;
          color: #ccccca;
        }
        dt {
          margin-right: 5px;
        }
        dd {
          margin-right: 36px;
          i {
            margin-right: 10px;
            font-size: 18px;
          }
        }
      }
      p {
        width: 752px;
        border-top: 1px solid #3f3f41;
        height: 54px;
        line-height: 54px;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
