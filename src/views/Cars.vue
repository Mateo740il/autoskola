<template>
    <main class="carList">
        <div class="carList__card" v-for="car in cars" :key="car.id">
            <img :src="car.carImg" alt="car">
            <h4>Instructor: {{ car.instructor.name }}</h4>
        </div>
    </main>
</template>

<script>
export default {
    created(){
        this.getCars()
    },
    data(){
        return{
            cars:[]
        }
    },
    methods:{
        async getCars(){
            let res=await fetch('cars.json')
            let data=await res.json()
            this.cars=data
        }
    }
}
</script>