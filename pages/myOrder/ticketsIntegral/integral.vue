<template>
  <div class="integral">
    <p class="top">我的积分</p>
    <div class="integral-inner">
      <h3 class="topTitle">
        <span>当前积分：</span>
        <span class="colorSuccess">16</span>
      </h3>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="name" label="收入/支出"></el-table-column>
        <el-table-column prop="address" label="说明"></el-table-column>
      </el-table>
      <page-list :total="100" class="page"></page-list>
    </div>
  </div>
</template>
<script>
import PageList from "@/components/myOrder/PageList";
export default {
  name: "integral",
  components: {
    PageList
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss">
.integral {
  max-width: 1005px;
  .top {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 24px;
  }
  .integral-inner {
    margin-top: 15px;
    background-color: #fff;
    min-height: 500px;
    padding: 25px;
    .topTitle {
      padding-bottom: 20px;
      border-bottom: 1px solid #ececec;
      margin-bottom: 20px;
      .colorSuccess {
        font-size: 20px;
      }
    }
    .el-table {
      border: 1px solid #ebeef5;
      .cell {
        text-align: center;
        color: #333;
      }
    }
    .el-table th {
      background: #f7f8f8;
      font-weight: normal;
    }
  }
}
</style>