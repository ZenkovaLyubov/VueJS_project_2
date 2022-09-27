<template>
  <div class="wrapper">
    <div class="content">
      <div v-if="title" class="title_modal">{{ title }}</div>
      <div class="content">
        <transition name="fade">
        <AddPaymentForm
        v-if="settings.content === 'addPaymentForm'"
        :categoryList="categoryList"
        @add-payment="addPayment"
        />
       </transition>
        <AuthForm v-if="settings.content === 'auth'"/>
        <ContextMenu v-if="settings.content === 'contextMenu'"/>
        <!-- <component :is="settings.content"/> -->
      </div>
        <footer>
          <ButtonClicked
          @clicked="clickedButtonAdd"
          :showAddForm="showAddForm"
          :buttonNameShow="`Add new cost +`"
          :buttonNameHide="`Close`"
          />
        </footer>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import AuthForm from './AuthForm.vue'
import ButtonClicked from './ButtonClicked.vue'
import ContextMenu from './ContextMenu.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  props: {
    showAddForm: {
      type: Boolean,
      default: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    // AddPaymentForm: () => import(/* webpackChunkName: "AddPaymentForm" */ '@/components/AddPaymentForm.vue'),
    // ButtonClicked: () => import(/* webpackChunkName: "ButtonClicked" */ '@/components/ModalWindowAddPayment.vue'),
    // AuthForm: () => import(/* webpackChunkName: "AuthForm" */ '@/components/AuthForm.vue')
    AddPaymentForm,
    ButtonClicked,
    AuthForm,
    ContextMenu
  },
  computed: {
    ...mapGetters(['categoryList', 'currentPage', 'paymentsListByPage']),
    title () {
      return this.settings?.title || ''
    }
  },
  methods: {
    ...mapActions(['addNewPayment']),
    addPayment (data) {
      console.log(this.settings.op)
      if (this.settings.op !== 'edit') {
        this.$store.dispatch('addNewPayment', data)
        this.createPaymentsList(this.currentPage)
      }
      if (this.settings.op === 'edit') {
        this.$store.dispatch('editPayment', data)
        this.clickedButtonAdd()
      }
    },
    clickedButtonAdd () {
      // this.$store.commit('SET_SHOW_ADD_FORM', !this.showAddForm)
      // this.$emit('clickedclose')
      this.$modal.hide()
    },
    createPaymentsList (n) {
      this.$store.dispatch('createPaymentsList', n)
    }
    // createPaymentsList (n) {
    //   this.$store.commit('SET_CURRENT_PAGE', n)
    //   this.$store.dispatch('fetchData', this.currentPage)
    //   // this.paymentsListLoc = this.paymentsListByPage[`page${this.currentPage}`]
    //   this.$store.commit('SET_PAYMENTS_LIST_LOC', this.paymentsListByPage[`page${this.currentPage}`])
    //   this.$store.dispatch('countTotalCost')
    // }

  }
}
</script>

<style scoped>

</style>
