<template>
    <div class="splashscreen">
        <img src="../assets/logo.svg" alt="logo">
        <h1><span>Cash</span>Flow</h1>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixins" as *;
@use "../styles/variables" as *;
.splashscreen {
  @include center();
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
  height: 100vh;
  h1 {
    color: $brand-blue;
  }
  h1 span {
    color: $brand-green;
  }
}
</style>