<template>
  <div id="app">
    <div class="container">
      <header>
        <nav class="nav_block">
        <router-link to="/dashboard" class="router-link">Dashboard</router-link>
        <router-link to="/about" class="router-link">About</router-link>
        <router-link to="/notfound" class="router-link">Not Found</router-link>
        </nav>
      </header>

      <main>
        <router-view/>
      </main>
      <transition name="fade">

      <ContextMenu v-if="showContext"/>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue'),
    ContextMenu: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ContextMenu.vue')
  },
  data: () => ({
    showModal: false,
    showContext: false,
    modalSettings: {},
    modalData: [],
    listContextMenu: []
  }),
  methods: {
    contextOpen (listContextMenu) {
      this.listContextMenu = listContextMenu
      this.showContext = true
    },
    contextClose () {
      this.showContext = false
    },
    modalOpen (settings, modalData) {
      this.modalSettings = settings
      this.showModal = true
      this.modalData = modalData
    },
    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    console.log(this.$modal)
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
    this.$context.EventBus.$on('show', this.contextOpen)
    this.$context.EventBus.$on('hide', this.contextClose)
  }
}
</script>

<style lang="scss" module>

</style>
