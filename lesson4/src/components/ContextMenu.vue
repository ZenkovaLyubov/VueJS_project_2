<template>
  <v-card
  class="text-center pa-2">
    <div>
      <a href="#" class="link_context" @click="editCost">Edit</a>
      <a href="#" class="link_context" @click="deleteCost">Delete</a>
    </div>
  </v-card>
  <!-- <div class="boxLink_menu">
    <div class="contextMenu_boxLink" :style="styleObj">
      <a href="#" class="link_context" @click="editCost">Edit</a>
      <a href="#" class="link_context" @click="deleteCost">Delete</a>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'ContextMenu',
  data: () => ({
    top: 0,
    right: 0,
    color: 'red'
  }),
  computed: {
    styleObj () {
      return {
        top: String(this.$store.getters.top) + 'px',
        right: String(this.$store.getters.right) + 'px'
      }
    }
  },
  methods: {
    editCost () {
      this.$context.hide()
      this.$modal.show({ title: 'Edit payment', content: 'addPaymentForm', op: 'edit' })
      this.$store.editRow = {}
    },
    deleteCost () {
      // this.$store.commit('DELETE_ROW')
      this.$store.dispatch('deletePayment')
      this.$store.editRow = {}
      this.$context.hide()
    }
  }
}
</script>

<style scoped>

</style>
