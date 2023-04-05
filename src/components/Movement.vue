<script setup>
import { computed, toRefs } from "vue";
import currencyFormater from "../helpers/currencyFormater";

const props = defineProps({
  title: {
    type: String,
  },
  description: String,
  id:{
    type: Number
  },
  amount: Number  
});


  const { title, description, id, amount } = toRefs(props);

  const amountCurrency = computed(()=> currencyFormater.format(amount.value));
  const isNegative = computed(()=> amount.value < 0 );

  const emit = defineEmits(["remove"]);

  const remove = ()=>{
    emit('remove', id.value);
  }

</script> 

<template>
  <div class="movement">
    <div class="content">
      <h4>{{title}}</h4>
      <p>{{description}}</p>
    </div>
    <div class="action">
        <button @click="remove">
          <img src="../assets/delete_icon.svg" alt="detele icon">
        </button>
        <p :class="isNegative ? 'red' : 'green'">{{amountCurrency}}</p>
    </div>
  </div>
</template>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
  color: red;
}
.green {
  color: green;
}
button{
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>