<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
      flat
    >
        <v-btn to="/dashboard" :ripple="false" plain>Dashboard</v-btn>
        <v-btn to="/about" :ripple="false" plain>About</v-btn>
    </v-app-bar>

    <v-main>
      <transition name="fade">
        <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
        :data="modalData"
        />

      </transition>
      <transition name="fade">
        <v-dialog v-model="showContext" max-width="110px">
        <v-card>
          <ContextMenu v-if="showContext"/>
        </v-card>
        </v-dialog>
      </transition>

      <!-- <MyButton>
        <template #prepend>
          <v-icon>mdi-plus</v-icon>
        </template>
        Click
      </MyButton>
      <MyButton>Click2</MyButton> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import MyButton from './components/MyButton.vue'
export default {
  name: 'App',
  components: {
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
