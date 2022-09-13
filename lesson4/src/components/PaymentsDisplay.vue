<template>
  <!-- <div>{{ paymentsList }} | {{$attrs}}</div> -->
  <!-- <div v-if="show">{{ paymentsList }}</div> -->
  <!-- <div class="tablePayment">
    <div class="rowTable h"><span class="columnTable">#</span><span class="columnTable">Дата</span><span class="columnTable">Категория</span><span class="columnTable">Значение</span></div>
    <div class="rowTable" v-for="(payment, index) in paymentsList" :key="index"><span class="columnTable">{{index+1}}</span><span class="columnTable">{{payment.date}}</span><span class="columnTable">{{payment.category}}</span><span class="columnTable">{{payment.value}}</span></div></div> -->
    <div class="tablePayment">
    <div class="rowTable h"><span class="columnTable">#</span><span class="columnTable">Дата</span><span class="columnTable">Категория</span><span class="columnTable">Значение</span></div>
    <div class="rowTable" v-for="(payment, index) in paymentsList" :key="index"><span class="columnTable">{{payment.id}}</span><span class="columnTable">{{payment.date}}</span><span class="columnTable">{{payment.category}}</span><span class="columnTable">{{payment.value}}</span></div>
    </div>

</template>

<script>
export default {
  name: 'PaymentsDisplay',
  // props: ['paymentsList']
  // props: {
  //   paymentsList: Array,
  //   show: Boolean
  // },
  data: () => ({

  }),
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
      // required: true
    //  validate()
    },
    // paymentsList_Short: {
    //   type: Array,
    //   default: () => ([])
    // },
    // paymentsListLenght: {
    //   type: Number,
    //   default: 0
    // },
    // indexStart: {
    //   type: Number,
    //   default: 0
    // },
    // indexEnd: {
    //   type: Number,
    //   default: 0
    // },
    show: Boolean
  }
}
</script>

<style scoped>

</style>
