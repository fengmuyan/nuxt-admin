<template>
  <div class="shoppingCart">
    <div class="container">
      <el-table :data="tableData" style="width: 100%" :row-class-name="rowStyle">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="name" label="商品" width="465">
          <template>
            <div class="imgBox">
              <img src="@/assets/imgs/shoppingCart/cart.png" alt>
            </div>
            <div class="content">
              <h4>
                Disney米奇缤纷乐园保鲜盒超值两件套保鲜盒超值两
                件套保鲜盒超值两
              </h4>
              <p>规格参数：300mm×240mm×2010mm</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label width="262"></el-table-column>
        <el-table-column label="数量" width="152">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num1" :min="1" :max="10" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <i class="el-icon-delete delIcon" @click="deleteRow(scope.$index, tableData)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="bot clearfix">
        <el-checkbox v-model="checked">全选</el-checkbox>
        <span class="delAllBtn">删除所有商品</span>
        <b>
          已选择
          <span class="goodsNum">2</span>件商品，
          <span class="toSelect">继续选择商品</span>
          <el-button>去询价</el-button>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          num1: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      checked: true
    };
  },
  methods: {
    rowStyle({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "isSelect";
      }
    },
    // 删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.shoppingCart {
  padding: 30px 0 80px 0;
  background-color: #fff;
  .el-checkbox__inner {
    border-radius: 0;
  }
  .el-table {
    td,
    th.is-leaf {
      border: none;
    }
    td,
    th {
      padding: 0;
    }
    .cell {
      text-align: center;
      padding: 0;
    }
    .el-table__header-wrapper {
      border: 1px solid #ececec;
      width: 1200px;
      height: 40px;
      margin-bottom: 30px;
      .cell {
        height: 38px;
        line-height: 38px;
        background-color: #f7f8f8;
      }
    }
    .el-table__body {
      border-spacing: 0px 10px;
      tr.el-table__row {
        height: 170px;
        margin-bottom: 20px;
        cursor: pointer;
        td {
          border: 1px solid #ececec;
        }
        & > td:first-child {
          border-right: none;
        }
        & > td:nth-child(2),
        & > td:nth-child(3),
        & > td:nth-child(4) {
          border-left: none;
          border-right: none;
        }
        & > td:last-child {
          border-left: none;
        }
      }
      tr.isSelect {
        background-color: #fafafa;
        td {
          border-color: #14cfa0;
        }
      }
    }
    .imgBox {
      width: 120px;
      height: 120px;
      border: 1px solid #ececec;
      margin-right: 20px;
      float: left;
      img {
        float: left;
      }
    }
    .content {
      margin-top: 20px;
      float: left;
      width: 325px;
      text-align: left;
      h4 {
        line-height: 22px;
        font-size: 14px;
        color: black;
      }
      p {
        line-height: 55px;
        color: #999999;
        font-size: 14px;
      }
    }
    .delIcon {
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: #14cfa0;
      }
    }
  }
  .el-table::before {
    height: 0;
  }
  .el-input-number {
    width: 90px;
    height: 26px;
    line-height: 26px;
    .el-input-number__decrease,
    .el-input-number__increase {
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 0;
      font-size: 12px;
    }
    .el-input__inner {
      height: 26px;
      padding: 0 10px;
      font-size: 13px;
    }
  }
  .bot {
    height: 50px;
    line-height: 50px;
    border: 1px solid #ececec;
    margin-top: 20px;
    padding-left: 23px;
    .delAllBtn {
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #14cfa0;
      }
    }
    b {
      position: relative;
      float: right;
      .goodsNum {
        color: #ff0000;
        margin: 0 4px;
      }
      .toSelect {
        color: #ff0000;
        text-decoration: underline;
        cursor: pointer;
        margin-right: 160px;
      }
      .el-button {
        position: absolute;
        top: -1px;
        right: -1px;
        width: 127px;
        height: 50px;
        line-height: 50px;
        background-color: #14cfa0;
        font-size: 18px;
        color: #fff;
        border: none;
      }
    }
  }
}
</style>