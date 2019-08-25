<template>
  <div class="serviceDesign">
    <service-text></service-text>
    <div class="myForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="125px">
        <div class="formBody">
          <h3 class="formTitle">申请暖通设计</h3>
          <el-form-item label="空间类型" prop="name">
            <el-select v-model="ruleForm.name" placeholder="空间类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="面积：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            <el-badge :value="2" class="item">m</el-badge>
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
          <el-form-item label="项目地区：" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址：" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="附件：" prop="desc">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button class size="small" type="success" plain>点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <p class="tipGrey">提示：申请信息提交后，我们的工程师会与您取得联系，您可以到-个人中心 “我的询价”中查看售后维保申请进度。</p>
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
  name: "serviceDesign",
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
        region: "",
        date1: "",
        date2: "",
        types: "",
        resource: "",
        desc: "",
        year: ""
      },
      rules: {
        year: [
          { required: false, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        types: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: false, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: false,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: false,
            message: "请选择时间",
            trigger: "change"
          }
        ],

        resource: [
          { required: false, message: "请选择活动资源", trigger: "change" }
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
.serviceDesign {
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
}
</style>