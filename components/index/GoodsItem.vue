<template>
  <div class="GoodsItem">
    <div class="picture">
      <img v-lazy="dataItem.img">
    </div>
    <p class="introduce">{{dataItem.name}}</p>
    <div class="inquiry">
      <i class="el-icon-goods"></i>去询价
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss">
.GoodsItem {
  &:hover{
    box-shadow: rgb(220,220,220) 0px 0px 10px;
  }
  cursor: pointer;
  .picture {
    height: 230px;
    width: 230px;
    img {
      float: left;
    }
  }
  .introduce {
    margin: 0 auto;
    width: 197px;
    line-height: 21px;
    margin-top: 19px;
  }
  .inquiry {
    margin: 0 auto;
    width: 100px;
    height: 27px;
    border: 1px solid #fe0000;
    margin-top: 18px;
    border-radius: 15px;
    font-size: 12px;
    line-height: 27px;
    text-align: center;
    color: #fe0000;
    cursor: pointer;
    &:hover{
      background-color: #fe0000;
      color:#fff;
    }
    i {
      margin-right: 6px;
      font-size: 14px;
    }
  }
}
</style>
