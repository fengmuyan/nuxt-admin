<template>
  <div class="ShippingAddress">
    <div class="OrderTop">账户设置</div>
    <div class="Shipping">
      <div class="title">收货地址</div>
      <div class="content">
        <el-button class="newBut"  @click="dialogVisible = true">＋ 新增收货地址</el-button>
        <div class="address clearfix">
          <div class="addCon f-l" v-for="(item,index) in addressDetai.address" :key="index">
            <div class="close"><i class="el-icon-close"></i></div>
            <div class="info">
              <p><span class="name">{{item.name}}</span><span class="moren" v-if="item.flag">默认地址</span></p>
              <p class="detail">{{item.city}}</p>
              <p class="xiang">{{item.detail}}</p>
              <p class="tel">{{item.tel}}</p>
            </div>
            <div class="close clearfix">
              <span class="f-r">编辑</span>
              <span class="f-r she" v-if="!item.flag">设为默认</span>
            </div>
          </div>
        </div>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        title="新增收货地址"
        >
        <div class="bian">
          <el-form :model="changeForm" label-width="100px" class="demo-dynamic">
            <el-form-item label="收货人：">
              <el-input type="text" placeholder="变更手机号"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input type="text" placeholder="变更手机号"></el-input>
            </el-form-item>
            <el-form-item label="所属地区：" prop="region">
              <el-select v-model="changeForm.provideId" placeholder="请选择" @change="provideChange">
                <el-option
                  v-for="item in provideArr"
                  :key="item.region_id"
                  :label="item.local_name"
                  :value="item.region_id"
                ></el-option>
              </el-select>
              <el-select v-model="changeForm.cityId" placeholder="请选择">
                <el-option
                  v-for="item in cityArr"
                  :key="item.region_id"
                  :label="item.local_name"
                  :value="item.region_id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址：">
              <el-input type="textarea" placeholder="变更手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub el-button--success"  @click="dialogVisible = false">保存收货地址</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import City from "@/utils/city.js";
export default {
  name: "ShippingAddress",
  data() {
    return {
      dialogVisible: false,
      changeForm: {
        region: "",
        provideId: "",
        cityId: ""
      },
      provideArr: [],
      cityArr: [],
      addressDetai: {
        address: [
          {
            name: "杨建波",
            id: "11",
            city: "北京市 朝阳区 东直门待道",
            detail: "工体北路新中大厦7层",
            tel: "13893847566",
            flag: true
          },
          {
            name: "向真",
            id: "10",
            city: "北京市 朝阳区 东直门待道",
            detail: "工体北路新中大厦7层",
            tel: "13893847566"
          },
          {
            name: "钱贝贝",
            id: "12",
            city: "北京市 朝阳区 东直门待道",
            detail: "工体北路新中大厦7层",
            tel: "13893847566"
          }
        ]
      }
    };
  },
  mounted() {
    this.provideArr = City.provide;
  },
  methods: {
    provideChange() {
      this.changeForm.cityId = "";
      this.cityArr = City.getCity(this.changeForm.provideId);
    }
  }
};
</script>

<style lang="scss">
.ShippingAddress {
  .OrderTop {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: white;
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .Shipping {
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
      padding: 24px 0px;
      .newBut {
        width: 200px;
        height: 45px;
        line-height: 43px;
        font-size: 16px;
        color: #14cfa0;
        border-color: #14cfa0;
        margin-bottom: 24px;
      }
      .address {
        .addCon {
          cursor: pointer;
          width: 470px;
          height: 180px;
          border: 1px solid #cccccc;
          margin-right: 15px;
          margin-bottom: 14px;
          &:hover {
            border: 1px solid #14cfa0;
          }
          .close {
            height: 32px;
            line-height: 32px;
            padding-right: 18px;
            i {
              float: right;
              margin-top: 10px;
              font-size: 12px;
              color: #cccccc;
            }
            span {
              font-size: 12px;
              line-height: 12px;
              padding-top: 4px;
            }
            .she {
              margin-right: 20px;
            }
          }
          .info {
            padding: 0px 28px;
            color: #333333;
            .name {
              font-size: 18px;
              font-weight: bold;
              margin-right: 10px;
              line-height: 18px;
            }
            .moren {
              display: inline-block;
              width: 80px;
              height: 22px;
              line-height: 22px;
              background: #ebc82c;
              border-radius: 11px;
              text-align: center;
              font-size: 14px;
              color: #ffffff;
            }
            .detail {
              font-size: 16px;
              margin-top: 22px;
              margin-bottom: 10px;
              font-weight: bold;
              line-height: 17px;
            }
            .xiang {
              font-size: 14px;
              line-height: 15px;
            }
            .tel {
              margin-top: 18px;
              font-size: 14px;
              line-height: 11px;
            }
          }
        }
        & > .addCon:nth-child(2n) {
          margin-right: 0px;
        }
      }
    }
    .el-dialog {
      width: 720px;
      height: 508px;
      border: 10px solid rgba(0, 0, 0, 0.6);
      .el-input {
        .el-input__inner {
          width: 336px;
        }
      }
      .el-select {
        width: 160px;
        margin-right: 12px;
        .el-input__inner {
          width: 160px;
        }
      }
      .el-textarea__inner {
        width: 336px;
        height: 70px;
      }
      .sub {
        width: 160px;
        height: 38px;
        line-height: 38px;
        font-size: 16px;
        margin-top: 10px;
      }
      .bian {
        width: 450px;
        margin: 0 auto;
      }
    }
  }
}
</style>
