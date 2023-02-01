<template>
    <p>{{ computeRemainTodo.length }} left</p>
  <div class="-mx-1 flex mt-2">
    <button
      type="button"
      class="btn-main mx-1"
      @click="handleToggleCheck"
      :class="{ 'btn-disabled': !store.data.length }"
    >
      {{
        !store.data.length || computeRemainTodo.length
          ? "Check All"
          : "Unchecked All"
      }}
    </button>
    <button
      @click="store.data = computeRemainTodo"
      type="button"
      class="btn-main mx-1"
      :class="{ 'btn-disabled': !store.data.length }"
    >
      Clear Completed
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const { store } = defineProps([
  "store",
  "computeRemainTodo",
]);

const handleToggleCheck = () => {
  const completed = computeRemainTodo._value.length ? true : false;
  store.data = store.data.map((todo) => ({ ...todo, completed }));
};

const computeRemainTodo = computed(() => {
  return store.data.filter((todo) => !todo.completed);
});


</script>

<style lang="scss" scoped>
</style>