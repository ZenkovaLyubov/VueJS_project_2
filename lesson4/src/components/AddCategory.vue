<template>
  <v-card>
    <form class="inputBox inside" action="#">
      <v-text-field label="New category" v-model="category"/>
      <v-btn class="button"
      color="teal"
      dark
      @click="addCategory">Save category</v-btn>
    </form>
  </v-card>
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
