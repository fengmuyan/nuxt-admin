const user = {
  state: {
    userInfo: null,
  },

  mutations: {
    setUserInfo(state, param) {
      state.userInfo = param
    },
    delUserInfo(state) {
      state.userInfo = null
    },
  },

  actions: {
    setUserInfo: ({ commit }, param) => {
      return new Promise((resolve, reject) => {
        commit('setUserInfo', param)
        resolve()
      })
    },
    delUserInfo: ({ commit }) => {
      return new Promise((resolve, reject) => {
        commit('delUserInfo')
        resolve()
      })
    }
  }
}

export default user