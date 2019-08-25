import Vue from 'vue';
import Vuex from 'vuex'
import getters from './getters'
import view from './modules/view'
import tagsView from './modules/tagsView'
import user from './modules/user'
import index from './modules/index'
Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: {
      view,
      tagsView,
      user,
      index
    },
    getters
  })
}

export default store