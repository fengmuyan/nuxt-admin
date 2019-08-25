<template>
  <div class="caseDetail bgGrey">
    <div style="line-height:60px;height:60px;background:pink;text-align:center;">面包屑</div>
    <div class="container bgWhite clearfix">
      <img class="img-response" :src="imgSrc" alt>
      <h3 class="conTitle">{{title}}</h3>
      <h3 class="title2">基本信息</h3>
      <div class="basic-infor">
        <p>项目名称：{{basic.name}}</p>
        <p>项目地点：{{basic.adress}}</p>
        <p>项目时间：{{basic.datas}}</p>
      </div>
      <h3 class="title2">项目需求</h3>
      <div class="needDescribe">
        <p>{{needDescribe}}</p>
      </div>
      <h3 class="title2">实施方案</h3>
      <div class="casePlan">
        <p>{{casePlan.describe}}</p>
        <img class="img-response" :src="casePlan.imgSrc" alt>
      </div>
      <h3 class="title2">涉及产品</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="产品系列"></el-table-column>
        <el-table-column prop="name" label="产品型号"></el-table-column>
        <el-table-column prop="address" label="产品品牌"></el-table-column>
      </el-table>
      <el-button type="success">去询价</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "caseDetail",
  layout: "default",

  components: {},

  data() {
    return {
      imgSrc: require("@/assets/imgs/casePic/case-pic1.png"),
      title: "首都机场T2航站楼",
      basic: {
        name: "南京CBD商务写字楼",
        adress: "北京",
        datas: "2007-02"
      },
      needDescribe:
        "根据业主要求，建筑构造，保温情况，确定设备选型方案——按照冷负荷每平米200w为基准。",
      casePlan: {
        describe:
          "项目实施时建筑物已经完工，每层楼预留了空调机房。勘察现场后，在满足使用要求和机房空间要求的情况下，我司提出了使用开利39G系列的空调箱。",
        imgSrc: require("@/assets/imgs/casePic/case-pic2.png")
      },
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
  methods: {}
};
</script>

<style lang="scss">
.caseDetail {
  .container {
    padding: 70px 100px;
  }
  .conTitle {
    font-size: 30px;
    margin-bottom: 60px;
  }
  .title2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 25px;
  }
  .basic-infor {
    line-height: 28px;
  }
  .img-response {
    margin-bottom: 60px;
  }
  .casePlan p,
  .needDescribe,
  .basic-infor {
    margin-bottom: 60px;
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
  .el-button{
      width: 200px;
      margin: 60px auto 0;
  }
}
</style>