<template>
  <div class="serviceIndex bgGrey">
    <service-banner></service-banner>
    <div style="line-height:60px;height:60px;background:pink;text-align:center;">面包屑</div>
    <div class="container clearfix">
      <service-navs class="f-l"></service-navs>
      <div class="service-r box-shadow bgWhite">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceBanner from "@/components/serviceIndex/ServiceBanner";
import ServiceNavs from "@/components/serviceIndex/ServiceNavs";

export default {
  name: "serviceIndex",
  layout: "default",
  components: {
    ServiceBanner,
    ServiceNavs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.serviceIndex {
  .service-r {
    margin-bottom: 100px;
    margin-left: 260px;
    padding: 64px 70px;
    .serTitle {
      margin-bottom: 35px;
      font-size: 24px;
    }
    .text {
      margin-bottom: 30px;
      line-height: 30px;
    }
    .img-response {
      margin: 0 auto 50px;
    }
    .myForm {
      margin-top: 30px;
      .formBody {
        border: 1px solid #cccccc;
        padding: 80px 100px;
        position: relative;
        .formTitle {
          font-size: 20px;
          padding: 20px;
          display: inline-block;
          background: #fff;
          position: absolute;
          top: -32px;
          left: 90px;
        }
        .el-input,
        .el-select {
          width: 160px;
        }
        .el-select,
        .el-date-editor {
          margin-right: 13px;
        }
        .line {
          text-align: center;
        }
        .midTip {
          color: #ccc;
          position: relative;
          text-align: center;
          margin-bottom: 20px;
          span {
            background: #fff;
            padding: 0 10px;
            position: relative;
          }
          &::before {
            content: "";
            position: absolute;
            bottom: 50%;
            left: 0;
            width: 100%;
            border-bottom: 1px dashed #ccc;
          }
        }
        .el-textarea__inner{
          height: 150px;
        }
        .tipGrey {
          margin-top: 5px;
        }
      }

      .el-button {
        width: 200px;
        height: 45px;
        margin: 80px auto 0;
        line-height: 45px;
        font-size: 18px;
      }
      .btnLine .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}
</style>