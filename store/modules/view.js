const view = {
  state: {
    scrollTop: 0,
    navActiveIndex: ""
  },

  mutations: {
    setScrollTop(state, top) {
      state.scrollTop = top
    },
    setNavActiveIndex(state, index) {
      state.navActiveIndex = index
    },
  },

  actions: {
    setScrollTop({ commit }, top) {
      return new Promise((resolve, reject) => {
        commit('setScrollTop', top)
        resolve()
      })
    },
    setNavActiveIndex({ commit }, index) {
      return new Promise((resolve, reject) => {
        commit('setNavActiveIndex', index)
        resolve()
      })
    }
  }
}

export default view