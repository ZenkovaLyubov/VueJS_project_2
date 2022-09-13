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
    pageCount: 4,
    rowCount: 5,
    idRow: 20,
  },
  mutations: {
    SET_PAYMENTS_LIST_BY_PAGE (state, { page, initialPaymentsList }) {
      state.paymentsListByPage[`page${page}`] = initialPaymentsList
    },
    ADD_PAYMENT_DATA (state, payment) {
      payment.id = state.idRow
      state.paymentsListByPage[`page${state.pageCount}`].push(payment)
    },
    SET_PAGECOUNT (state, pageCount) {
      state.pageCount = pageCount
    }
  },
  getters: {
    paymentsList_Short: (state) => state.paymentsList_Short,
    paymentsList: (state) => state.paymentsList,
    paymentsListByPage: (state) => state.paymentsListByPage,
    pageCount: (state) => state.pageCount,
    addPage5Exist: (state) => state.addPage5Exist,
    idRow: (state) => state.idRow,
    showAddForm: (state) => state.showAddForm
  },
  actions: {
    fetchData ({ commit, state }, page) {
      const index = Object.keys(state.paymentsListByPage)
      if (index.includes(`page${page}`)) {
        console.log('index ' + index.includes(`page${page}`))
      } else {
        const initialPaymentsList = API_DATA[`page${page}`]
        commit('SET_PAYMENTS_LIST_BY_PAGE', { page, initialPaymentsList })
        console.log('test' + `page${page}`)
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
    }
  },
  modules: {
    categoryList
  }
})
