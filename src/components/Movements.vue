<script setup>
import { toRefs } from "vue";
import Movement from './Movement.vue';

const props = defineProps({
  movements: {
    type: Array,
    default: () => [],
  },
});

const { movements } = toRefs(props);

const emit = defineEmits(["remove"]);

const remove = (id)=>{
  console.log("remove", id);
  emit("remove", id);
}

</script>


<template>
  <div class="movements">
    <h2 class="title">Historial</h2>
    <div class="content">
      <Movement 
        v-for="{title, id, description, amount} in movements" 
        :key="id"
        :title="title"
        :description= "description"
        :amount ="amount"
        :id = "id"
        @remove="remove"
        />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables" as *;

.movements {
  font-family: $font;
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
  .title {
    margin: 8px 16px 24px 16px;
    color: $brand-blue;
  }
  .content {
    max-height: 68vh;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: scroll;
  }
}
</style>