<template>
  <div class="InfoMation">
    <el-button class="huos" :disabled="disabled">{{btnContent}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      btnContent: "获取验证码",
      disabled: false
    };
  },
  methods: {
    getCodes() {
      this.time = 60;
      this.timer();
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btnContent = this.time + "s后重新获取";
        this.disabled = true;
        var timer = setTimeout(this.timer, 1000);
      } else if (this.time === 0) {
        this.btnContent = "获取验证码";
        clearTimeout(timer);
        this.disabled = false;
      }
    }
  }
};
</script>

<style lang="scss">
.InfoMation {
  .huos {
    font-size: 16px;
    color: #333333;
    border: none;
    text-align: center;
  }
}
</style>
