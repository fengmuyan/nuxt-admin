<template>
  <div class="ShopBread">
     <div class="Breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>空调主机</el-breadcrumb-item>
          <el-breadcrumb-item>二级分类</el-breadcrumb-item>
          <el-breadcrumb-item>最终极</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tag
          :key="index"
          v-for="(tag,index) in dynamic"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          <span class="tagname">{{tag.name}}：</span><span class="tagval">{{tag.value}}</span>
        </el-tag>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    dynamic: {
      type: Array
    }
  },
  methods: {
    handleClose(tag) {
      this.$store.dispatch("handleClose", tag);
    }
  }
};
</script>

<style lang="scss">
.ShopBread {
  .Breadcrumb {
    height: 55px;
    line-height: 55px;
    overflow: hidden;
    .el-breadcrumb {
      height: 55px;
      line-height: 55px;
      float: left;
      margin-right: 8px;
    }
    .el-tag {
      min-width: 110px;
      height: 25px;
      line-height: 25px;
      margin-right: 11px;
      background: #fafafa;
      border: 1px solid#eaeaea;
      font-size: 14px;
    }
    .tagname {
      color: #888888;
      font-size: 12px;
    }
    .tagval {
      color: #14d0a0;
    }
    .el-icon-close {
      color: #14d0a0;
      right: -5px;
    }
  }
}
</style>
