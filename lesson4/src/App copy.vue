<template>
  <div id="app">
    <div class="container">
      <!-- <header>
        <div class="header">My personal costs: {{ totalCost }} </div>
      </header> -->
      <header>
        <!-- <nav class="nav_block" @click.prevent="pushHistory"> -->
        <nav class="nav_block">
        <!-- <a href="/#dashboard" class="router-link">Dashboard</a>
        <a href="/#about" class="router-link">About</a>
        <a href="/#notfound" class="router-link">Not Found</a> -->
        <!-- <a href="/dashboard" class="router-link">Dashboard</a>
        <a href="/about" class="router-link">About</a>
        <a href="/notfound" class="router-link">Not Found</a> -->
        <router-link to="/dashboard" class="router-link">Dashboard</router-link>
        <router-link to="/about" class="router-link">About</router-link>
        <router-link to="/notfound" class="router-link">Not Found</router-link>
        </nav>
      </header>

      <main>
        <!-- <DashBoard v-if="page === 'dashboard'"/>
        <AboutPage v-if="page === 'about'"/>
        <NotFound v-if="page === 'notfound'"/> -->
        <router-view/>
        <!-- <button @click="goToPage">About</button> -->
      </main>
      <transition name="fade">
        <!-- <ModalWindowAddPayment
      v-if="showModal"
      :settings="modalSettings"
      :data="modalData"
      /> -->
      <ContextMenu v-if="showContext"/>
      </transition>
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import AboutPage from '../pages/AboutPage.vue'
// import NotFound from '../pages/NotFound.vue'
// import DashBoard from '../pages/DashBoard.vue'
// import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'

export default {
  name: 'App',
  components: {
    // DashBoard,
    // AboutPage,
    // NotFound
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue'),
    ContextMenu: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ContextMenu.vue')
  },
  data: () => ({
    // page: 'dashboard'
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
