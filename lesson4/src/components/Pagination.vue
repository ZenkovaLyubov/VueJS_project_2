<template>
   <div class="page_box">
      <a href="#" class="page_link" v-for="n in pageCount" :key="n" v-on:click="clickPage(n)">{{n}}</a>
  </div>
</template>

<script>
export default {
  name: 'PagiNation',
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
    }
  }

}
</script>

<style scoped>

</style>
