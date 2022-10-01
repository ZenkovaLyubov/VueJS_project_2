<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3">My personal costs:</div>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="showModal">
        <template v-slot:activator="{ on }">
        <v-btn
          color="teal"
          dark
          v-on="on"
          @click="addPayment"
          >
          Add new cost
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        </template>
        <v-card>
          <AddPaymentForm
          />
        </v-card>
        </v-dialog>
          <v-col>
            <div>
          <PaymentsDisplay
          :paymentsList="paymentsListLoc"
          @clickedcontextmenu="showContextMenu"/>
        </div>
          </v-col>
        <v-row>
          <PagiNation
          @clickpage="createPaymentsList"
          :pageCount="pageCount"
          />
        </v-row>
      </v-col>
      <v-col>Graph</v-col>
    </v-row>
  </v-container>
  <!-- <div>
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
  </div> -->
</template>

<script>
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import PagiNation from '../src/components/Pagination.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'
// import AddPaymentForm from '@/components/AddPaymentForm.vue'

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
    // AddPaymentForm
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
