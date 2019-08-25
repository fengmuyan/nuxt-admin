<template>
  <div class="Shoplist">
    <div @click="$router.push({path:'/shopping/detail'})">
      <div class="picture">
        <img v-lazy="dataItem.img" alt>
      </div>
      <div class="introduce">
        <p>{{dataItem.name}}</p>
      </div>
    </div>
    <div class="inquiry" @click="$emit('getInquery',dataItem)">
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
.Shoplist {
  width: 238px;
  height: 373px;
  border: 1px solid #ececec;
  float: left;
  margin: 0px 10px 11px 0px;
  // margin: 4px 6px 8px 4px;
  &:hover{
    box-shadow: rgb(220,220,220) 0px 0px 10px;
  }
  .picture {
    height: 238px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      display:block;
    }
  }
  .introduce {
    padding: 22px 20px;
  }
  .inquiry {
    margin: 0 auto;
    width: 100px;
    height: 27px;
    border: 1px solid #fe0000;
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
.Shoplist:nth-child(4n) {
  margin-right: 0px;
}
</style>
