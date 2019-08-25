<template>
  <div class="supplyChain">
    <service-text></service-text>
    <div class="myForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="125px">
        <div class="formBody">
          <h3 class="formTitle">供应链金融</h3>
          <el-form-item label="用户类型：" prop="types">
            <el-checkbox-group>
              <el-checkbox-button>
                公司
                <i class="el-icon-check"></i>
              </el-checkbox-button>
              <el-checkbox-button>
                个人
                <i class="el-icon-check"></i>
              </el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="联系人：" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <div class="midTip">
            <span>如下为选填项，能帮助您更精准地表达需求</span>
          </div>
          <el-form-item label="公司名称：" prop="name">
            <el-input v-model="ruleForm.name" style="width:336px"></el-input>
          </el-form-item>
          <el-form-item label="资金额度：" prop="name">
            <el-input v-model="ruleForm.name" icon="el-icon-search"></el-input>
            <span class="icon-yuan">￥</span>
            <span>元</span>
          </el-form-item>
          <el-form-item label="项目需求：" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入详细地址"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="btnLine">
          <el-button type="success" @click="submitForm('ruleForm')">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import ServiceText from "@/components/serviceIndex/ServiceText";
export default {
  name: "supplyChain",
  layout: "login",
  data() {
    return {
      fileList: [
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      ruleForm: {
        name: "",
        phone: "",
        types: "",
        desc: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        name: [
          { required: false, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        types: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        desc: [{ required: false, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  components: {
    ServiceText
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="scss">
.supplyChain {
  .el-badge__content {
    background: none;
    color: #333;
  }
  .el-upload {
    .el-button {
      margin-top: 0 !important;
    }
  }
  .el-upload__tip {
    display: inline-block;
    margin-left: 10px;
    color: #ccc;
  }
  .el-checkbox-group {
    .el-icon-check {
      border: 10px solid;
      border-color: transparent #14cfa0 #14cfa0 transparent;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 0;
      width: 0;
      display: none;
    }
    .el-icon-check:before {
      color: #fff;
      font-weight: bold;

      position: absolute;
      right: -10px;
      bottom: -12px;
    }
    .el-checkbox-button {
      margin-right: 25px;
    }
    .el-checkbox-button__inner {
      border-left: 1px solid #dcdfe6;
      border-radius: 0;
      width: 100px;
      height: 38px;
      line-height: 38px;
      padding: 0;
    }
    .el-checkbox-button__inner:hover {
      color: #14cfa0;
    }
    .el-checkbox-button.is-focus .el-icon-check {
      display: block;
    }
    .el-checkbox-button.is-focus .el-checkbox-button__inner {
      border: 1px solid #14cfa0 !important;
    }
  }
  .icon-yuan {
    position: absolute;
    left: 3px;
    bottom: 0;
  }
}
</style>