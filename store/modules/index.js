const index = {
  state: {
    menu: [],
  },

  mutations: {
    setMenu(state, param) {
      state.menu = param
    }
  },

  actions: {
    setMenu: ({ commit }, param) => {
      return new Promise((resolve, reject) => {
        commit('setMenu', param)
        resolve()
      })
    }
  }
}

export default index