import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '../store/categoryList'

Vue.use(Vuex)

const API_DATA = {
  page1: [{
    id: 1,
    date: '28.03.2020',
    category: 'Food',
    value: 10
  },
  {
    id: 2,
    date: '24.03.2020',
    category: 'Transport',
    value: 20
  },
  {
    id: 3,
    date: '28.03.2020',
    category: 'Food',
    value: 30
  },
  {
    id: 4,
    date: '28.03.2020',
    category: 'Food',
    value: 40
  },
  {
    id: 5,
    date: '24.03.2020',
    category: 'Transport',
    value: 50
  }],
  page2: [{
    id: 6,
    date: '28.03.2020',
    category: 'Food',
    value: 60
  },
  {
    id: 7,
    date: '28.03.2020',
    category: 'Food',
    value: 70
  },
  {
    id: 8,
    date: '24.03.2020',
    category: 'Transport',
    value: 80
  },
  {
    id: 9,
    date: '28.03.2020',
    category: 'Food',
    value: 90
  },
  {
    id: 10,
    date: '28.03.2020',
    category: 'Food',
    value: 100
  }],
  page3: [{
    id: 11,
    date: '24.03.2020',
    category: 'Transport',
    value: 110
  },
  {
    id: 12,
    date: '28.03.2020',
    category: 'Food',
    value: 120
  },
  {
    id: 13,
    date: '28.03.2020',
    category: 'Food',
    value: 130
  },
  {
    id: 14,
    date: '24.03.2020',
    category: 'Transport',
    value: 140
  },
  {
    id: 15,
    date: '28.03.2020',
    category: 'Food',
    value: 150
  }],
  page4: [{
    id: 16,
    date: '28.03.2020',
    category: 'Food',
    value: 160
  },
  {
    id: 17,
    date: '24.03.2020',
    category: 'Transport',
    value: 170
  },
  {
    id: 18,
    date: '28.03.2020',
    category: 'Food',
    value: 180
  },
  {
    id: 19,
    date: '28.03.2020',
    category: 'Food',
    value: 190
  },
  {
    id: 20,
    date: '24.03.2020',
    category: 'Transport',
    value: 200
  }]
}

export default new Vuex.Store({
  state: {
    paymentsListByPage: {},
    paymentsListLoc: [],
    pageCount: 4,
    rowCount: 5,
    idRow: 20,
    totalCost: 0,
    currentPage: 1,
    showAddForm: false,
    editRow: {},
    top: 0,
    right: 0,
    categoryListTotal: []
  },
  mutations: {
    SET_PAYMENTS_LIST_BY_PAGE (state, { page, initialPaymentsList }) {
      state.paymentsListByPage[`page${page}`] = initialPaymentsList
    },
    ADD_PAYMENT_DATA (state, payment) {
      console.log('ADD_PAYMENT_DATA')
      payment.id = state.idRow
      state.paymentsListByPage[`page${state.pageCount}`].push(payment)
    },
    EDIT_PAYMENT_DATA (state, payment) {
      let editId = state.paymentsListByPage[`page${state.currentPage}`].find(x => x.id === state.editRow.id)
      editId = Object.assign(editId, payment)
      console.log(editId)
      state.editRow = {}
    },
    SET_PAGECOUNT (state, pageCount) {
      state.pageCount = pageCount
    },
    SET_TOTAL_COST (state, totalCost) {
      state.totalCost = totalCost
    },
    SET_CURRENT_PAGE (state, currentPage) {
      state.currentPage = currentPage
    },
    SET_PAYMENTS_LIST_LOC (state, paymentsListLoc) {
      state.paymentsListLoc = paymentsListLoc
    },
    SET_SHOW_ADD_FORM (state, showAddForm1) {
      state.showAddForm = showAddForm1
    },
    SET_EDIT_ROW (state, payment) {
      state.editRow = payment
    },
    DELETE_ROW (state) {
      const editId = state.paymentsListByPage[`page${state.currentPage}`].findIndex(x => x.id === state.editRow.id)
      console.log(editId)
      state.paymentsListByPage[`page${state.currentPage}`].splice(editId, 1)
      state.editRow = {}
    },
    SET_TOP (state, top) {
      state.top = top
    },
    SET_RIGHT (state, right) {
      state.right = right
    },
    CATEGORY_LIST_TOTAL (state, { categoryTotal, sum }) {
      // state.categoryListTotal[categoryTotal] = sum
      state.categoryListTotal.push({'category': categoryTotal, 'total': sum})

    }
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListByPage: (state) => state.paymentsListByPage,
    pageCount: (state) => state.pageCount,
    addPage5Exist: (state) => state.addPage5Exist,
    idRow: (state) => state.idRow,
    showAddForm: (state) => state.showAddForm,
    totalCost: (state) => state.totalCost,
    currentPage: (state) => state.currentPage,
    paymentsListLoc: (state) => state.paymentsListLoc,
    editRow: (state) => state.editRow,
    top: (state) => state.top,
    right: (state) => state.right,
    categoryListTotal: (state) => state.categoryListTotal
  },
  actions: {
    fetchData ({ commit, state }, page) {
      const index = Object.keys(state.paymentsListByPage)
      if (index.includes(`page${page}`)) {
        console.log('index ' + index.includes(`page${page}`))
      } else {
        const initialPaymentsList = API_DATA[`page${page}`]
        commit('SET_PAYMENTS_LIST_BY_PAGE', { page, initialPaymentsList })
      }
    },
    addNewPayment ({ commit, state }, newPayment) {
      let keys = []
      keys = Object.keys(state.paymentsListByPage)
      if ((!keys.includes(`page${state.pageCount + 1}`) && (state.rowCount === 5))) {
        state.rowCount = 0
        state.paymentsListByPage[`page${state.pageCount + 1}`] = []
        state.addPage5Exist = true
        state.pageCount += 1
      }
      state.idRow += 1
      commit('ADD_PAYMENT_DATA', newPayment)
      state.rowCount += 1
    },
    editPayment ({ commit, state }, newPayment) {
      commit('EDIT_PAYMENT_DATA', newPayment)
    },
    countTotalCost ({ commit, state }) {
      let totalCost = 0
      for (const key in API_DATA) {
        totalCost += (Object.values(API_DATA[key]).reduce((total, { value }) => total + value, 0))
      }
      if (state.pageCount > 4) {
        for (let i = 5; i <= state.pageCount; i++) {
          totalCost += (Object.values(state.paymentsListByPage[`page${i}`]).reduce((total, { value }) => +total + +value, 0))
        }
      }
      commit('SET_TOTAL_COST', totalCost)
    },
    createPaymentsList ({ commit, dispatch, state }, n) {
      commit('SET_CURRENT_PAGE', n)
      dispatch('fetchData', state.currentPage)
      // this.paymentsListLoc = this.paymentsListByPage[`page${this.currentPage}`]
      commit('SET_PAYMENTS_LIST_LOC', state.paymentsListByPage[`page${state.currentPage}`])
      // dispatch('countTotalCost')
    },
    clickedButtonAdd (commit, showAddForm1) {
      console.log(showAddForm1)
      commit('SET_SHOW_ADD_FORM', showAddForm1)
    },
    deletePayment ({ commit, state }) {
      commit('DELETE_ROW')
      let keys = []
      keys = state.paymentsListByPage[`page${state.currentPage}`].length
      if (keys === 0) {
        // delete state.paymentsListByPage[`page${state.currentPage}`]
        // state.paymentsListByPage[`page${state.currentPage}`]
      }
    },
    countTotalCostForCategory ({ commit, state }) {
      for (const key in state.categoryList.categoryList) {
        let categoryTotal = state.categoryList.categoryList[key]
        let sum = 0;
        Object.values(API_DATA).forEach(v=>{
        v.filter(el => el.category === categoryTotal).forEach(x => {sum+=x.value})
        // categoryListTotal[state.categoryList.categoryList[key]] = sum
      });
        commit('CATEGORY_LIST_TOTAL', { categoryTotal, sum })
      }
      console.log('categoryListTotal', state.categoryListTotal)
    },
  },
  modules: {
    categoryList
  }
})
