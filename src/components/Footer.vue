<template>   
    <footer class="footer">
        <p>Copyright &copy; {{today.getFullYear()}} Mateo Bukić</p>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            today:new Date()
        }
    }
}
</script>