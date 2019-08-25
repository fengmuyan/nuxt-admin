const tagsView = {
  state: {
    visitedViews: [],
  },

  mutations: {
    saveData(state, param) {
      state.visitedViews.forEach((element, index) => {
        if (element.index === param.index) {
          state.visitedViews.splice(index, 1)
        }
      })
      state.visitedViews.push(param);
    },
    handleClose(state, param) {
      state.visitedViews.splice(state.visitedViews.indexOf(param), 1);
    },
  },

  actions: {
    saveData({ commit }, param) {
      return new Promise((resolve, reject) => {
        commit('saveData', param)

        resolve()
      })
    },
    handleClose({ commit }, param) {
      return new Promise((resolve, reject) => {
        commit('handleClose', param)
        resolve()
      })
    }
  }
}

export default tagsView