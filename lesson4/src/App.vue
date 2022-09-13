<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="header">My personal costs: {{ totalCost }} </div>
    </header>
    <main>
      <ButtonClicked
      @clicked="clickedButtonAdd"
      :showAddForm="showAddForm"
      :buttonNameShow="`Add new cost +`"
      :buttonNameHide="`Hide form -`"
      />
      <AddPaymentForm v-if="showAddForm"
      :categoryList="categoryList"
      @add-payment="addPayment"
      />
      <PaymentsDisplay
        :paymentsList="paymentsListLoc"
        show
      />
      <PagiNation
      @clickpage="createPaymentsList"
      :pageCount="pageCount"
      />
    </main>
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import ButtonClicked from './components/ButtonClicked.vue'
import PagiNation from './components/Pagination.vue'
// import AddCategory from './components/AddCategory.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    // HelloWorld
    PaymentsDisplay,
    AddPaymentForm,
    ButtonClicked,
    PagiNation
    // AddCategory
  },
  data: () => ({
    paymentsListLoc: [],
    showAddForm: false,
    currentPage: 1
  }),
  computed: {
    ...mapGetters(['paymentsList', 'paymentsListByPage', 'categoryList', 'pageCount', 'paymentsList_Short', 'addPage5Exist', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchCategoryData', 'addNewPayment', 'whatchPageCount', 'countTotalCost']),
    ...mapMutations(['ADD_PAYMENT_DATA']),

    addPayment (data) {
      this.$store.dispatch('addNewPayment', data)
      this.createPaymentsList(this.currentPage)
    },
    clickedButtonAdd () {
      this.showAddForm = !this.showAddForm
    },
    createPaymentsList (n) {
      this.currentPage = n
      this.$store.dispatch('fetchData', this.currentPage)
      this.paymentsListLoc = this.paymentsListByPage[`page${this.currentPage}`]
      this.$store.dispatch('countTotalCost')
    }
  },
  created () {
    this.fetchCategoryData()
    this.createPaymentsList(this.currentPage)
  }
}
</script>

<style lang="scss" module>

</style>
