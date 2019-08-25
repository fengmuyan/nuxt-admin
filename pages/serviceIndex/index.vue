<template>
  <div class="serviceInstall">
    <service-text></service-text>
    <div class="myForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="125px">
        <div class="formBody">
          <h3 class="formTitle">安装申请</h3>
          <el-form-item label="品牌：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="预约安装时间" required prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2"></el-time-picker>
          </el-form-item>
          <el-form-item label="联系人：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <div class="midTip">
            <span>如下为选填项，能帮助您更精准地表达需求</span>
          </div>
          <el-form-item label="型号：" prop="types">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="项目地区" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            <p class="tipGrey">提示：申请信息提交后，我们的工程师会与您取得联系，您可以到-个人中心“我的询价”中查看售后维保申请进度。</p>
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
  name: "serviceInstall",
  layout: "login",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        types: "",
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        types: [
          { required: false, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: false, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],

        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
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
    }
  }
};
</script>

<style lang="scss">
</style>