<template>
  <div class="ServiceNavs">
    <ul>
      <li
        class="navItem box-shadow"
        :class="{active:currentIndex==index}"
        v-for="(item,index) in leftNavs"
        :key="index"
        @click="navClick(item,index)"
      >
        <nuxt-link :to="item.linkSrc">{{item.navText}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServiceNavs",
  data() {
    return {
      currentIndex: "",
      leftNavs: [
        {
          navText: "安装",
          linkSrc: "/serviceIndex"
        },
        {
          navText: "售后维保",
          linkSrc: "/serviceIndex/afterSale"
        },
        {
          navText: "暖通设计",
          linkSrc: "/serviceIndex/serviceDesign"
        },
        {
          navText: "供应链金融",
          linkSrc: "/serviceIndex/supplyChain"
        }
      ]
    };
  },
  methods: {
    navClick(item, index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.ServiceNavs {
  width: 240px;
  .navItem a {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;

    background: #fff;
    color: #3b3b5b;
  }
  .navItem a {
    display: block;
  }
  .navItem:hover a,
  .navItem.active a {
    background: #3b3b5b;
    color: #fff;
  }
}
</style>
