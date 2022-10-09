<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3">My personal costs:</div>
    </v-row>
    <v-row>
      <v-col cols="8">
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

      <Doughnut :chart-data="chartData" />

    </v-row>
  </v-container>

</template>

<script>
import PaymentsDisplay from '../src/components/PaymentsDisplay.vue'
import PagiNation from '../src/components/Pagination.vue'
import { Doughnut } from 'vue-chartjs'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'DashBoard',
  data () {
    return {
      showAddForm1: false,
      modalSettings: {},
      showModal: false,
      categoryTotal: [],
      sumCategory: []
    }
  },
  components: {
    PaymentsDisplay,
    PagiNation,
    Doughnut
  },
  mounted() {
    this.renderLineChart(),
    this.categoryTotal = this.$store.getters.categoryListTotal.map(el => el.category),
    this.sumCategory = this.$store.getters.categoryListTotal.map(el => el.total)
  },
  computed: {
    ...mapGetters(['paymentsList', 'paymentsListByPage', 'pageCount', 'addPage5Exist', 'totalCost', 'currentPage', 'paymentsListLoc', 'showAddForm']),
    chartData: function() { return {
        labels: this.categoryTotal,
        datasets: [
          {
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(130, 162, 235)'
            ],
            data: this.sumCategory
          }
        ]
      }
    }

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
    },
    renderLineChart () {
      return this.chartData
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
    this.$store.dispatch('countTotalCostForCategory')
  }
}
</script>

<style scoped>

</style>
