<script>
export default {
    methods:{
        reload(){
            location.reload();
        }
    }
}
</script>

<template>
    <header>
        <img 
            @click="reload"
            src="../assets/logo.svg" 
            alt="logo">
        <h1><span>Cash</span>Flow</h1>
        <span></span>
    </header>
</template>


<style scoped lang="scss">
    @use "../styles/mixins" as *;
    @use "../styles/variables" as *;

    header {
        @include center(space-around);
        font-family: Arial, Helvetica, sans-serif;
        width: 100vw;
        img,
        span {
        width: 48px;
        }
        h1 {
            font-size: 1.4rem;
            color: $brand-blue;
        }
        h1 span {
            color: $brand-green;
        }
    }
</style>