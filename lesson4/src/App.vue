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
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import AboutPage from '../pages/AboutPage.vue'
// import NotFound from '../pages/NotFound.vue'
// import DashBoard from '../pages/DashBoard.vue'

export default {
  name: 'App',
  components: {
    // DashBoard,
    // AboutPage,
    // NotFound
  },
  data: () => ({
    // page: 'dashboard'
  }),
  methods: {
    // goToPage () {
    //   // this.$router.push('/about')
    //   this.$router.push({
    //     name: 'about',
    //     params: {
    //       a: 'qwerty'
    //     }
    //   })
    // }
    // setPage () {
    //   // console.log(e.target)
    //   // this.page = window.location.hash.slice(1)
    //   this.page = window.location.pathname.slice(1)
    //   console.log(this.page)
    // },
    // pushHistory (e) {
    //   if (!e.target.classList.contains('router-link')) return
    //   window.history.pushState({}, '', e.target.href)
    //   this.setPage()
    // }
  },
  mounted () {
    // window.addEventListener('hashchange', this.setPage())
    // window.addEventListener('popstate', this.setPage())
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style lang="scss" module>

</style>
