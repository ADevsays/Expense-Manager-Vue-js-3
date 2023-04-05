<script setup>
import { reactive, ref } from "vue";
import Modal from "./Modal.vue";
import FormComponent from "./FormComponent.vue";

const showModal = ref(false);

const defaultData = {
    title: '',
    amount: 0,
    description: '',
    movementType: 'Ingreso',
    date: '0',
    id: '0'
}

const dataToAdd = reactive({...defaultData});

const emit = defineEmits(["create"]);

const handleSubmit=()=>{
    //Validation
    if(Object.values(dataToAdd).includes('')){
        alert('Algun campo no ha sido llenado, revisa');
        return;
    }

    const {amount, movementType} = dataToAdd;

    dataToAdd.amount = movementType == 'Ingreso' ? amount : -amount; 
    dataToAdd.date = new Date();
    dataToAdd.id = Date.now();
    console.log(dataToAdd.id)

    emit("create", dataToAdd);


    //Reset the objet data and form with it
    showModal.value = false;
    Object.keys(dataToAdd).forEach(e=>{
        dataToAdd[e] = defaultData[e];
    });
}


</script>

<template>
  <div>
    <button @click="showModal = true">Agregar movimiento</button>
    <teleport to="#app">
      <Modal v-show="showModal" @close="showModal = false">
        
        <form-component
            :dataToAdd="dataToAdd"
            :handleSubmit = "handleSubmit"
        />

      </Modal>
    </teleport>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables" as *;
button {
  color: white;
  font-size: 1.25rem;
  background-color: $brand-blue;
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}

</style>