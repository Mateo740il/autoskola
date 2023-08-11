<template>
  <div class="navbar">
    <RouterLink to="/" class="homeBtn">
      <div class="navbar__logo">
        <h1>Autoškola Bura</h1>
      </div>
    </RouterLink>
    <nav v-if="isVisible" class="navbar__nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/vehicles">Vehicles</RouterLink>
      <RouterLink :to="{ name: 'sign-up' }">Sign Up</RouterLink>
    </nav>
    <img
      v-if="!isVisible"
      src="../assets/images/hamburgerMenu.svg"
      alt="menu icon"
      width="30"
      height="30"
      @click="showMobileMenu()"
    />
  </div>
  <nav v-if="mobileMenu" class="mobileMenu">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/vehicles">Vehicles</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'sign-up' }">Sign Up</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      mobileMenu: false,
    };
  },
  computed: {
    isVisible() {
      if (this.windowWidth > 768) {
        this.mobileMenu = false;
      }
      return this.windowWidth > 768; // Adjust the breakpoint as needed
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
};
</script>
