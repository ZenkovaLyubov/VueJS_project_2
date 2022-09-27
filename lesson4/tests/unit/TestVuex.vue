<template>
<div>
  <input type="text" name="" id="" v-model="prop">
  <button @click="save">Save</button>
</div>
</template>

<script>
  import { mapActions } from 'vuex'

export default {
  name: 'TestVuex',
  data: () => {
    return {
      prop: ''
    }
  },
  methods: {
    ...mapActions(['addData']),
    save () {
      const { prop } = this
      this.addData(prop)
    }
  }
}
</script>
