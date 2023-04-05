<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import Resume from "../components/Resume.vue";
import Movements from "../components/Movements.vue";
import Action from "../components/Action.vue";
import Graphic from "../components/Graphic.vue";
import Layout from "../layouts/Layout.vue";
import { computed, onMounted, reactive, ref } from "vue";

const amounts = [2000, 1000, -3000, -500, 2000];

const amount = ref(null);
const movements = ref([]);

onMounted(()=>{
  const fromLocal = JSON.parse(localStorage.getItem("movements"));
  if(Array.isArray(fromLocal)){
    movements.value = fromLocal.map(m=>{ return {...m, date: new Date(m.date)}});
  }
});

const getAmounts = computed(() => {
  const result = movements.value
    .filter((m) => {
      const today = new Date();
      const oldDate = today.setDate(today.getDate() - 30);
      //   console.log(m.title, m.date.getTime())
      return m.date.getTime() >= oldDate;
    })
    .map((m) => Number(m.amount));
  return result.map((m, i) => {
    const last = result.slice(0, i + 1);
    return last.reduce((sum, acc) => sum + acc, 0);
  });
});

const totalAmount= computed(()=>{
  return movements.value.reduce((sum, acc)=> sum + acc.amount, 0);
});

const create = (movement) => {
  movements.value.push({ ...movement });
  saveLocalStorage();
};

const remove = (id) => {
  const { value } = movements;
  movements.value = value.filter((e) => e.id != id);
  saveLocalStorage();
};

const saveLocalStorage = () => {
  localStorage.setItem("movements", JSON.stringify(movements.value));
};

const select = (element)=>{
  console.log(element)
  amount.value = element;
}

</script>

<template>
  <div>
    <Layout>
      <template #header>
        <Header-component />
      </template>
      <template #resume>
        <Resume 
          :label="'Ahorro total'" 
          :amount="amount" 
          :total-amount="totalAmount">
          <template #graphic>
            <Graphic 
              :amounts="getAmounts" 
              @selectElement="select"/>
          </template>
          <template #action>
            <Action @create="create" />
          </template>
        </Resume>
      </template>
      <template #movements>
        <Movements :movements="movements" @remove="remove" />
      </template>
    </Layout>
  </div>
</template>