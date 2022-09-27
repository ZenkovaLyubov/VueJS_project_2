<template>
   <div class="page_box">
      <a href="#" class="page_link" v-for="n in pageCount" :key="n" v-bind:class="[(n === nameActiveLink()) ? 'pageActive' : '']" v-on:click="clickPage(n)">{{n}}</a>
  </div>
</template>

<script>

export default {
  name: 'PagiNation',
  data: () => ({
    pageActive: 1
  }),
  props: {
    pageCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickPage (n) {
      console.log('Click page: ' + n)
      this.$emit('clickpage', n)
      this.$context.hide()
    },
    nameActiveLink () {
      const test = this.$store.getters.currentPage
      console.log('test' + test)
      return test
    }
  },
  created () {
    // this.pageActive = this.$store.getters.currentPage
  }
}
</script>

<style scoped>

</style>
