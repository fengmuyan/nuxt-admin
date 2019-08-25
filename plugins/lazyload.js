import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  /* error: require('@/assets/timg.gif'),
  loading: require('@/assets/timg2.gif'), */
  attempt: 1
})