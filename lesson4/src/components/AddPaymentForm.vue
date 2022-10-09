<template>
    <v-card class="text-left pa-8" width="500px">
    <v-text-field v-model="date" label="Date"/>
    <v-select
    v-model="category"
    label="Category"
    :items="categoryList"
    />
    <ButtonClicked
    @clicked="clickedButtonAdd"
    :showAddForm="showAddFormCategory"
    :buttonNameShow="`Add Category +`"
    :buttonNameHide="`Hide form -`"/>

    <v-card>
      <AddCategory v-if="showAddFormCategory"
      @add-category="createCategory"
      />
    </v-card>

    <v-text-field v-model="value" label="Value"/>

    <v-btn
    color="teal"
    dark
    @click="addPayment">Save payment</v-btn>

    </v-card>
</template>

<script>
import ButtonClicked from './ButtonClicked.vue'
import AddCategory from './AddCategory.vue'
export default {
  name: 'AddPaymentForm',
  components: {
    ButtonClicked,
    AddCategory
  },
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    value: '',
    category: '',
    date: '',
    showAddFormCategory: false
  }),
  methods: {
    addPayment () {
      console.log(this.categoryList)
      console.log('add', this.currentDate)
      const { value, category, date, currentDate } = this
      const data = {
        value,
        category,
        // date ? date : currentDate
        date: date || currentDate
      }
      this.$emit('add-payment', data)
    },
    clickedButtonAdd () {
      this.showAddFormCategory = !this.showAddFormCategory
    },
    createCategory (datacategory) {
      this.$store.commit('ADD_NEW_CATEGORY', datacategory)
    }
  },
  computed: {
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  },
  created () {
    if (this.$route.name === 'AddPayment') {
      if (this.$route.params.value) {
        this.value = this.$route.params.value
      }
      if (this.$route.params.category) {
        this.category = this.$route.params.category
      }
      this.date = this.currentDate
    }
    if (this.$store.getters.editRow) {
      this.value = this.$store.getters.editRow.value
      this.category = this.$store.getters.editRow.category
      this.date = this.$store.getters.editRow.date
    }
  }
}
</script>

<style scoped>

</style>
