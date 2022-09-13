<template>
  <div>
    <form class="inputBox inside" action="#">
      <input class="payment_input" type="text" placeholder="New category" v-model="category">
      <!-- <input class="payment_input" type="text" placeholder="Category" v-model="category"> -->
      <button class="button" @click="addCategory">Save category</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data: () => ({
    category: ''
  }),
  methods: {
    addCategory () {
      this.$emit('add-category', this.category)
      this.category = ''
    }
  }
}
</script>

<style scoped>

</style>
