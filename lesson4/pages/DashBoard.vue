<template>
  <div>
    <div class="header">My personal costs</div>
      <div class="wrapper-buttonBox">
          <div class="button_box">
            <button class="button" @click="authModal">Auth</button>
            <button class="button" @click="addPayment">Add Payment</button>
        </div>
      </div>
      <PaymentsDisplay
        :paymentsList="paymentsListLoc"
        @clickedcontextmenu="showContextMenu"
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
import PagiNation from '../src/components/Pagination.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  data: () => ({
    showAddForm1: false,
    modalSettings: {},
    showModal: false
  }),
  components: {
    PaymentsDisplay,
    PagiNation
  },
  computed: {
    ...mapGetters(['paymentsList', 'paymentsListByPage', 'pageCount', 'addPage5Exist', 'totalCost', 'currentPage', 'paymentsListLoc', 'showAddForm'])
  },
  methods: {
    ...mapActions(['fetchCategoryData', 'whatchPageCount', 'countTotalCost']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
    },
    authModal () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    },
    clickedButtonAdd () {
      this.$store.commit('SET_SHOW_ADD_FORM', !this.showAddForm1)
      this.showAddForm1 = this.showAddForm
    },
    clickedClose () {
      this.showAddForm1 = this.showAddForm
    },
    showContextMenu () {
      console.log('1')
      this.$modal.show({ title: 'ContexMenu', content: 'contextMenu' })
    },
    createPaymentsList (n) {
      this.$store.dispatch('createPaymentsList', n)
    }
  },
  created () {
    this.showAddForm1 = this.showAddForm
    console.log('showAddForm1 ' + this.showAddForm1)
    console.log('showAddForm ' + this.showAddForm)
    this.fetchCategoryData()
    if (this.$route.params.page) {
      this.currentPage = Number(this.$route.params.page)
    }
    this.createPaymentsList(this.currentPage)
    if (this.$route.name === 'AddPayment') {
      this.clickedButtonAdd()
    }
  }
}
</script>

<style scoped>

</style>
