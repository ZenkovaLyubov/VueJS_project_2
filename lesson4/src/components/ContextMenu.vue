<template>
  <div class="boxLink_menu">
    <div class="contextMenu_boxLink">
      <a href="#" class="link_context" @click="editCost">Edit</a>
      <a href="#" class="link_context" @click="deleteCost">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  methods: {
    editCost () {
      this.$modal.show({ title: 'Edit payment', content: 'addPaymentForm', op: 'edit' })
    },
    deleteCost () {
      // this.$store.commit('DELETE_ROW')
      this.$store.dispatch('deletePayment')
      this.$store.editRow = {}
      this.$modal.hide()
    }
  }
}
</script>

<style scoped>

</style>
