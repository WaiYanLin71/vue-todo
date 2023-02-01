<template>
  <ul class="mt-3">
    <li
      v-for="todo in computeTodo"
      :key="todo.id"
      className="flex items-center justify-between mb-2 border px-2 py-4"
    >
      <div className="flex items-center">
        <input
          @click="todo.completed = !todo.completed"
          type="checkbox"
          :checked="todo.completed"
          class="
            focus:outline-none
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            rounded
            focus:ring-blue-500
            dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2
            dark:bg-gray-700 dark:border-gray-600
          "
        />
        <label
          :for="todo.id"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {{ todo.name }}
        </label>
      </div>
      <div>
        <svg
          @click="handleDelete(todo.id)"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { computed, toRef } from "vue";

const { store, status } = defineProps(["store", "status"]);

// const status = toRef(pops, "status");

const handleDelete = (id) => {
  store.data = store.data.filter((todo) => todo.id !== id);
};

const computeTodo = computed(() => {
  return store.data.filter(
    (todo) => status.type === null || status.type === todo.completed
  );
});
</script>

<style lang="scss" scoped>
</style>