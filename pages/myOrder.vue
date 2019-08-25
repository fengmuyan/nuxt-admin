<template>
  <div class="myOrder">
    <div class="container ordercontent clearfix">
      <order-left v-if="!noLeft.includes($router.history.current.name)"></order-left>
      <div class="orderright">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>
<script>
import OrderLeft from "@/components/myOrder/OrderLeft";
export default {
  name: "myOrder",
  components: {
    OrderLeft
  },
  data() {
    return {
      noLeft: ["myOrder-orderDetail"]
    };
  }
};
</script>
<style lang="scss">
.myOrder {
  background: #f8f8f8;
  .ordercontent {
    padding: 30px 0;
    .orderright {
      float: left;
      min-width: 1005px;
    }
  }
}
</style>