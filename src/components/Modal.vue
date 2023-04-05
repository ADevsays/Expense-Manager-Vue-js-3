<script setup>

const emit = defineEmits(['close']);

const close = ()=>{
    emit("close");
}

</script>

<template>
  <div class="modal">
    <div class="head">
      <p>Nuevo movimiento</p>
      <button @click="close">
          <img src="../assets/close-icon.svg" alt="">
      </button>
    </div>
    <div class="body">
        <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables" as *;
@use "../styles/mixins" as *;
.modal {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  button{
      @include center();
      background-color: transparent;
      border: none;
  }
  .head {
    @include center(space-between);
    width: 100%;
    padding: 24px 24px;
    box-sizing: border-box;
    
  }
  p {
      margin: 0;
      font-size: 1.5rem;
      color: $brand-blue;
    }
}
</style>