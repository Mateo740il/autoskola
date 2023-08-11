<template>
  <main class="signup"> 
    <form action="" class="signup__form">
      <label for="firstName">First Name:</label>
      <input type="text" placeholder="...enter first name" name="firstName" v-model="firstName"/>
      <label for="lastName">Last Name:</label>
      <input type="text" placeholder="...enter last name" name="lastName" v-model="lastName"/>
      <label for="email">Email:</label>
      <input type="text" placeholder="...enter mail" name="email" v-model="email"/>
      <label for="email">Date:</label>
      <input type="date" name="email" v-model="date"/>
      <button class="btn" @click.prevent="handleSubmit">Submit</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      date: ""
    };
  },
  methods: {
    handleSubmit() {
        this.firstName='',
        this.lastName='',
        this.email='',
        this.date=''
    },
  },
};
</script>
