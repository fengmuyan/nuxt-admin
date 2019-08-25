<template>
  <div class="PersonalInfor">
    <div class="OrderTop">账户设置</div>
    <div class="Personal">
      <div class="title">个人信息</div>
      <div class="content">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label="需求图片：" class="uploadImg">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="3"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="手机号："  class="telno">
            <el-input value="13691018275"></el-input><span @click="dialogVisible = true">修改</span>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="登录名：">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="所属地区：" prop="region">
            <el-select v-model="ruleForm.region" placeholder="北京市">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="ruleForm.region" placeholder="北京市">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司名称：">
            <el-input v-model="ruleForm.name" class="compress"></el-input>
          </el-form-item>
          <el-form-item label="公司地址：">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入详细地址"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="inqBtn">提交</el-button>
      </div>
      <!-- 1 -->
      <!-- <el-dialog
        :visible.sync="dialogVisible"
        >
        <div class="bian">
          <div class="picture">
            <div class="top">
              <i class="el-icon-mobile-phone"></i>
            </div>
            <p>变更手机验证码认证</p>
          </div>
          <el-form :model="changeForm" ref="changeForm" label-width="0px" class="demo-dynamic">
            <el-form-item>
              <el-input type="text" placeholder="变更手机号"></el-input>
            </el-form-item>
            <el-form-item class="clearfix mess">
              <el-input placeholder="验证码"></el-input><el-button class="huo">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub activeInfo"  @click="dialogVisible = false">确认变更</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog> -->
      <!-- 2 -->
      <!-- <el-dialog
        :visible.sync="dialogVisible"
        >
        <div class="bian">
          <div class="picture">
            <div class="top">
              <i class="el-icon-mobile-phone"></i>
            </div>
            <p>变更手机验证码认证</p>
          </div>
          <el-form :model="changeForm" ref="changeForm" label-width="0px" class="demo-dynamic">
            <el-form-item>
              <el-input type="text" value="14568942581" placeholder="变更手机号"></el-input>
            </el-form-item>
            <el-form-item class="clearfix mess">
              <el-input placeholder="验证码" value="456897"></el-input><el-button class="huo">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub el-button--success"  @click="dialogVisible = false">确认变更</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog> -->
      <!-- 3 -->
      <el-dialog
        :visible.sync="dialogVisible"
        >
        <div class="bian">
          <div class="picture">
            <div class="top">
              <i class="el-icon-mobile-phone"></i>
            </div>
            <p>变更手机验证码认证</p>
          </div>
          <el-form :model="changeForm" ref="changeForm" label-width="0px" class="demo-dynamic">
            <el-form-item>
              <span>当前手机号：</span><span>13694562586</span>
            </el-form-item>
            <el-form-item class="clearfix mess">
              <el-input placeholder="验证码"></el-input><el-button class="huo">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub el-button--success"  @click="dialogVisible = false">验证后绑定新号码</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfor",
  data() {
    return {
      ruleForm: {
        name: "",
        desc: "",
        dialogImageUrl: "",
        region: ""
      },
      dialogVisible: false,
      changeForm: {}
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    }
  }
};
</script>

<style lang="scss">
.PersonalInfor {
  .OrderTop {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: white;
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .Personal {
    background: white;
    width: 1005px;
    min-height: 600px;
    padding: 0px 24px;
    color: #333333;
    .title {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
    }
    .content {
      padding: 40px 63px 56px 63px;
      .el-form {
        width: 584px;
        .el-form-item {
          margin-bottom: 23px;
        }
        .el-form-item__label {
          padding-right: 20px;
          font-size: 14px;
          color: #333333;
        }
        .el-input {
          text-align: left;
          .el-input__inner {
            width: 160px;
          }
        }
        .el-select {
          margin-right: 12px;
        }
        .el-textarea__inner {
          width: 470px;
          border-radius: 0;
          min-height: 150px !important;
        }
        .compress {
          width: 336px;
          height: 38px;
          line-height: 38px;
          .el-input__inner {
            width: 336px;
          }
        }
        .telno {
          .el-input {
            float: left;
            width: 120px;
          }
          .el-input__inner {
            border: none;
            width: 120px;
            padding: 0px;
          }
          span {
            color: #14cfa0;
            text-decoration: #14cfa0;
            text-decoration-line: underline;
          }
        }
        .uploadImg {
          overflow: hidden;
          .el-form-item__content {
            width: 480px;
            text-align: left;
            height: 120px;
          }
          .el-upload--picture-card {
            width: 120px;
            height: 120px;
            line-height: 120px;
            border-radius: 0;
            background-color: #f8f8f8;
            border: 1px solid #cccccc;
            margin-right: 0px;
          }
          .el-upload-list__item-actions,
          .is-success {
            border-radius: 0;
            width: 150px;
            height: 150px;
            margin-right: 10px;
          }
        }
        .tip {
          font-size: 14px;
          line-height: 24px;
          width: 480px;
          text-align: left;
          margin-left: 100px;
          color: #333333;
          margin-top: -8px;
        }
      }
      .inqBtn {
        height: 35px;
        line-height: 35px;
        width: 100px;
        background-color: #14cfa0;
        color: #fff;
        display: inline-block;
        // margin-top: 20px;
        border: none;
        margin-left: 100px;
      }
    }
    .el-dialog {
      width: 570px;
      height: 570px;
      border: 10px solid rgba(0, 0, 0, 0.6);
    }
    .bian {
      .picture {
        text-align: center;
        .top {
          margin: 0 auto;
          width: 60px;
          height: 60px;
          border-radius: 60px;
          text-align: center;
          line-height: 60px;
          background: #cdeef7;
          i {
            // width: 22px;
            // height: 39px;
            font-size: 30px;
            margin-top: 15px;
            color: #fff;
          }
        }
        p {
          margin-top: 20px;
          font-size: 18px;
          color: #333333;
        }
      }
      .el-input__inner {
        width: 300px;
        height: 45px;
        line-height: 45px;
      }
      .mess {
        .el-input {
          width: 200px;
          float: left;
          .el-input__inner {
            width: 200px;
          }
        }
        .huo {
          width: 90px;
          margin-left: 10px;
          height: 45px;
          font-size: 16px;
          color: #333333;
          float: left;
          border: none;
        }
      }
      .sub {
        width: 300px;
        height: 45px;
        margin-top: 37px;
        font-size: 18px;
      }
      .demo-dynamic {
        margin: 0 auto;
        width: 310px;
        margin-top: 40px;
      }
    }
    .activeInfo {
      background: #a8e5d6;
    }
  }
}
</style>
