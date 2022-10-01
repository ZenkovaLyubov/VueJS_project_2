<template>
  <!-- <div>{{ paymentsList }} | {{$attrs}}</div> -->
  <!-- <div v-if="show">{{ paymentsList }}</div> -->
    <!-- <div class="tablePayment">
      <div class="rowTable h"><span class="columnTable">#</span><span class="columnTable">Дата</span><span class="columnTable">Категория</span><span class="columnTable">Значение</span><span class="columnTable"></span></div>
      <div class="rowTable" v-for="(payment, index) in paymentsList" :key="index"><span class="columnTable">{{payment.id}}</span><span class="columnTable">{{payment.date}}</span><span class="columnTable">{{payment.category}}</span><span class="columnTable">{{payment.value}}</span><span class="columnTable"><a href="#" :id="`${payment.id}`" class="linkTable" @click="contextMenu(payment)">...</a></span></div>
    </div> -->
    <v-container>
      <v-row>
        <v-col cols="1">#</v-col>
        <v-col cols="3">Date</v-col>
        <v-col cols="5">Category</v-col>
        <v-col cols="2">Value</v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <!-- <v-row v-for="({ id, value, category, date }, index) in paymentsList" :key="index"> -->
        <v-row v-for="(payment, index) in paymentsList" :key="index">
        <v-col cols="1">{{ payment.id }}</v-col>
        <v-col cols="3">{{ payment.date}}</v-col>
        <v-col cols="5">{{ payment.category }}</v-col>
        <v-col cols="2">{{ payment.value }}</v-col>
        <v-col cols="1" :id="`${payment.id}`" ><a href="#" @click="contextMenu(payment)" class="linkTable">...</a></v-col>
      </v-row>
      <!-- <v-row>
        <v-pagination v-model="currentPage" :length="totalPages" @input="pageSelect"/>
      </v-row> -->
    </v-container>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  data () {
    return {
      currentPage: 3
    }
  },
  // data: () => ({
  //   // coord: {}
  // }),
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  },
  computed: {
    totalPages () {
      return 9
    }
  },
  methods: {
    pageSelect (page) {
      this.currentPage = page
    },
    contextMenu (payment) {
      const coord = this.getBoundingClientRect(document.getElementById(`${payment.id}`))
      this.$store.commit('SET_EDIT_ROW', payment)
      this.$store.commit('SET_TOP', Number(coord.top + 15))
      this.$store.commit('SET_RIGHT', Number(coord.left - 520))
      this.$context.show({ title: '', content: 'contextMenu' })
    },
    getBoundingClientRect (element) {
      const rect = element.getBoundingClientRect()
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
      }
    }
  }
}
</script>

<style scoped>

</style>
