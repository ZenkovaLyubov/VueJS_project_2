export default {
  install (Vue) {
    if (this.installed) return

    this.installed = true

    Vue.prototype.$context = {
      EventBus: new Vue(),
      show (listMenu) {
        // console.log('show')
        this.EventBus.$emit('show', listMenu)
      },
      hide () {
        // console.log('hide')
        this.EventBus.$emit('hide')
      }
    }
  }
}
