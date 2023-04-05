<script >
  import { defineAsyncComponent } from 'vue';
  import SplashScreen from './components/SplashScreen.vue';

  const myHome = defineAsyncComponent(()=> {
    return new Promise(res=>{
      setTimeout(() => {
        res(import('./pages/MyHome.vue'))
      }, 2500);
    })
  })

  export default{
    components:{
      SplashScreen,
      myHome
    }
  }

</script>

<template>
  <Suspense>
    <template #default>
      <my-home/>
    </template>
    <template #fallback>
      <splash-screen/>
    </template>
  </Suspense>
</template>

<style scoped>

</style> 

