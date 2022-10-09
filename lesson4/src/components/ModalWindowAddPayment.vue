<template>
<v-container>
   <div class="wrapper">
    <div class="content">
      <div v-if="title" class="text-h6 text-right pr-2">{{ title }}</div>
      <div class="content">
        <transition name="fade">
          <AddPaymentForm
          v-if="settings.content === 'addPaymentForm'"
          :categoryList="categoryList"
          @add-payment="addPayment"
          />
        </transition>
        <AuthForm v-if="settings.content === 'auth'"/>

        <v-dialog>
          <ContextMenu v-if="settings.content === 'contextMenu'"/>
        </v-dialog>

      </div>
        <footer>
          <ButtonClicked class="text-right pr-2"
          @clicked="clickedButtonAdd"
          :showAddForm="showAddForm"
          :buttonNameShow="`Add new cost +`"
          :buttonNameHide="`Close`"
          />
        </footer>
    </div>
  </div>
</v-container>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
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
    AddPaymentForm,
    ButtonClicked,
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
      this.$store.dispatch('countTotalCostForCategory')
    },
    clickedButtonAdd () {
      this.$modal.hide()
    },
    createPaymentsList (n) {
      this.$store.dispatch('createPaymentsList', n)
    }

  }
}
</script>

<style scoped>

</style>
