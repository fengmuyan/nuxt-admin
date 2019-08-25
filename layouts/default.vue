<template>
  <div class="layout">
    <index-top></index-top>
    <index-nav></index-nav>
    <app-main></app-main>
    <index-bot></index-bot>
    <transition name="slide">
      <index-nav v-show="fixedTop" :fixedType="true"></index-nav>
    </transition>
  </div>
</template>

<script>
import IndexTop from "@/components/layout/IndexTop";
import IndexNav from "@/components/layout/IndexNav";
import AppMain from "@/components/layout/AppMain";
import IndexBot from "@/components/layout/IndexBot";
import Lodash from "lodash";
export default {
  name: "layout",
  components: {
    IndexTop,
    IndexNav,
    AppMain,
    IndexBot
  },
  data() {
    return {
      top: 0,
      fixedTop: false,
      isShowNav: true,
      navNoFixed: [
        "shoppingCart",
        "shopInquiry",
        "quickInquiry",
        "myOrder",
        "myOrder-allOrders",
        "myOrder-inquiryOrders",
        "myOrder-inquiryDetail",
        "myOrder-orderDetail",
        "myOrder-AccountSetting",
        "myOrder-AccountSetting-ShippingAddress",
        "myOrder-AccountSetting-ChangePsw",
        "myOrder-AccountSetting-FeedBack"
      ]
    };
  },
  watch: {
    top(val) {
      if (
        !this.navNoFixed.includes(this.$router.history.current.name) &&
        val > 600
      ) {
        this.fixedTop = true;
      } else {
        this.fixedTop = false;
      }
    },
    $route() {
      this.$store.dispatch("setNavActiveIndex", this.$route.path);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollTop);
    });
  },
  created() {
    this.$store.dispatch("setNavActiveIndex", this.$route.path);
  },
  methods: {
    scrollTop: Lodash.debounce(function() {
      this.top =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.$store.dispatch("setScrollTop", this.top);
    }, 10)
  }
};
</script>

<style lang="scss">
.layout {
  .slide-enter-active {
    transition: all 0.6s ease;
  }
  .slide-enter {
    transform: translateY(-50px);
  }
}
</style>