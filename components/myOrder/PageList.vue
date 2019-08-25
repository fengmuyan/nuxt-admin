<template>
  <div class="PageList">
    <div class="pagination-container">
      <el-pagination
        background
        v-if="paginationShow"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        layout="prev, pager, next, total"
        :total="total"
        :page-size="pageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginationShow: true,
      currentPage: 1
    };
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  methods: {
    changeData() {
      this.paginationShow = false;
      this.handleCurrentChange(1);
      this.$nextTick(() => {
        this.paginationShow = true;
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("changePage", val);
    }
  }
};
</script>

<style lang="scss">
.PageList {
  overflow: hidden;
  .el-pagination {
    padding: 28px 0 40px 0;
    text-align: right;
    .el-pagination__total {
      margin-right: 0;
      margin-left: 15px;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      &:after {
        content: "记录";
      }
    }
    .el-pager {
      li {
        width: 36px;
        height: 36px;
        line-height: 34px;
        font-size: 12px;
        background-color: #fff;
        color: #333;
        border: 1px solid #ececec;
        border-radius: 0;
        font-weight: 500;
        &:hover {
          color: #333 !important;
        }
      }
      li.active {
        background-color: #14cfa0 !important;
      }
    }
    .btn-prev,
    .btn-next {
      width: 75px;
      height: 36px;
      border-radius: 0;
      background-color: #fff;
      border: 1px solid #ececec;
      .el-icon {
        display: none;
      }
      &:before {
        content: "上一页";
        font-size: 12px;
      }
    }
    .btn-next:before {
      content: "下一页";
    }
  }
}
</style>