<template>
  <div>
    <div class="header">My personal costs: {{ totalCost }} </div>
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
 </div>
</template>

<script>
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import AddPaymentForm from '../src/components/AddPaymentForm.vue'
import ButtonClicked from '../src/components/ButtonClicked.vue'
import PagiNation from '../src/components/Pagination.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  data: () => ({
    paymentsListLoc: [],
    showAddForm: false,
    currentPage: 1
  }),
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    ButtonClicked,
    PagiNation
  },
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

<style scoped>

</style>
