<template>
  <header>
    <Navbar/>
  </header>
  <RouterView />
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';

  export default {
    components:{Navbar,Footer},
  }
</script>
