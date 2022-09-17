<template>
  <div>
    <form class="inputBox" action="#">
      <input class="payment_input" type="text" placeholder="Value" v-model="value">
      <!-- <input class="payment_input" type="text" placeholder="Category" v-model="category"> -->
      <select class="payment_input" v-model="category">
        <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
        >{{ category }}</option>
      </select>
      <ButtonClicked
      @clicked="clickedButtonAdd"
      :showAddForm="showAddFormCategory"
      :buttonNameShow="`Add Category +`"
      :buttonNameHide="`Hide form -`"
      />
      <AddCategory v-if="showAddFormCategory"
      @add-category="createCategory"
      />
      <input class="payment_input" type="text" placeholder="Date" v-model="date">
      <button class="button" @click="addPayment">Add</button>
    </form>

  </div>
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
  }
}
</script>

<style scoped>

</style>
