export default {
  // namespaced: true,
  state: {
    categoryList: []
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    },
    ADD_NEW_CATEGORY (state, datacategory) {
      state.categoryList.push(datacategory)
    }
  },
  actions: {
    fetchCategoryData ({ commit }) {
      setTimeout(() => {
        const categoryList = ['Food', 'Transport', 'Education', 'Sport']

        commit('SET_CATEGORY_LIST', categoryList)
      }, 1000)
    }

  }
}
