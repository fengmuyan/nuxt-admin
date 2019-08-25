<template>
  <div class="tickets">
    <p class="top">我的优惠券</p>
    <div class="tickets-inner">
      <h3 class="topTitle">
        <span>当前优惠券：</span>
        <span class="colorSuccess">16</span>
      </h3>
      <ul class="nav clearfix">
        <li class="active">
          <span>未使用</span>
          <span class="colorRed">2</span>
        </li>
        <li>
          <span>快过期</span>
          <span class="colorRed">2</span>
        </li>
        <li>
          <span>已过期</span>
          <span class="colorRed">6</span>
        </li>
      </ul>
      <div class="ticketList">
        <ul class="list clearfix">
          <li
            v-for="(item,index) in ticketPaper"
            :key="index"
            :class="{'nomargin':(index+1)%4===0}"
          >
            <ticket-paper :ticketPaper="item" @toUse="toUse" @delets="delets"></ticket-paper>
          </li>
        </ul>
      </div>
      <page-list :total="100" class="page"></page-list>
    </div>
  </div>
</template>
<script>
import TicketPaper from "@/components/serviceIndex/TicketPaper";
import PageList from "@/components/myOrder/PageList";
export default {
  name: "tickets",
  components: {
    TicketPaper,
    PageList
  },
  data() {
    return {
      ticketPaper: [
        {
          money: "20000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "1"
        },
        {
          money: "5000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "2"
        },
        {
          money: "10000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "3"
        },
        {
          money: "20000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "1"
        },
        {
          money: "5000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "2"
        },
        {
          money: "10000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "3"
        },
        {
          money: "5000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "2"
        },
        {
          money: "10000",
          userIf: "满5000可用",
          dataTime: "2017-02-07",
          downtext1: "仅限购买购买仅限购买",
          downtext2: "单笔订单只可使用一张",
          downtext3: "dddkmnioee订单",
          status: "3"
        }
      ]
    };
  },
  methods: {
    toUse: function(data) {
      console.log(data);
    },
    delets: function(data) {
      console.log(data);
    }
  },
};
</script>

<style lang="scss">
.tickets {
  max-width: 1005px;
  .top {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 24px;
  }
  .tickets-inner {
    margin-top: 15px;
    background-color: #fff;
    min-height: 500px;
    padding: 25px;
    .topTitle {
      padding-bottom: 20px;
      border-bottom: 1px solid #ececec;
      margin-bottom: 20px;
      .colorSuccess {
        font-size: 20px;
      }
    }
    .nav {
      width: 100%;
      li {
        float: left;
        margin-right: 40px;
      }
      li span {
        padding-bottom: 8px;
        font-size: 14px;
        display: inline-block;
        border-bottom: 3px solid transparent;
        cursor: pointer;
      }
      li.active span:first-child {
        border-color: #14cfa0;
      }
    }

    .list {
      margin-top: 20px;
      li {
        float: left;
        margin-right: 25px;
        margin-bottom: 35px;
      }
      li.nomargin {
        margin-right: 0;
      }
    }
  }
}
</style>