<template>
   <div>
    <button v-on:click="showForm" class="button">{{nameButton()}}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonClicked',
  props: {
    showAddForm: {
      type: Boolean,
      default: false
    },
    buttonNameShow: {
      type: String,
      default: 'Button +'
    },
    buttonNameHide: {
      type: String,
      default: 'Button -'
    }
  },
  methods: {
    showForm () {
      this.$emit('clicked')
    },
    nameButton () {
      if (this.showAddForm) {
        return this.buttonNameHide
      } else if (!this.showAddForm) {
        return this.buttonNameShow
      }
    }
  }
}
</script>

<style scoped>

</style>
