<template>
  <main class="home">
    <section className="home__headline">
      <div className="home__headline__content">
        <h1>AUTOŠKOLA</h1>
        <h1>BURA</h1>
        <h2>NAJBRŽI PUT DO VOZAČKE</h2>
        <RouterLink to="/sign-up">
          <button class="btn">Sign Up</button>
        </RouterLink>
      </div>
    </section>
    <div class="home__content">
      <h2>Kategorije</h2>
      <div class="home__content__grid">
        <div
          class="home__content__grid__card"
          v-for="category in categories"
          :key="category.id"
        >
          <img :src="category.img" alt="image" />
          <h3>{{ category.category }}</h3>
        </div>
      </div>
      <RouterLink to="/vehicles" class="">
        <button class="btn">All Vehicles</button>
      </RouterLink>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    this.getCategoriesa();
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategoriesa() {
      let res = await fetch("categories.json");
      let data = await res.json();
      this.categories = data;
    },
  },
};
</script>
