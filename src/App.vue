<template>
  <div class="container mt-5 flex justify-center">
    <div
      className="max-w-sm mt-5 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <form className="flex items-end" @submit.prevent="handleSubmit">
        <div className="w-full">
          <label
            for="todo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Enter Todo</label
          >
          <input
            type="text"
            name="todo"
            class="
              bg-gray-50
              border
              focus:outline-none
              border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
        <div className="ml-2">
          <button type="submit" class="btn-main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex -mx-1 my-3">
        <button
          type="button"
          class="btn-main mx-1"
          @click="status = null"
          :class="{ 'bg-blue-700 text-white': status === null }"
        >
          All
        </button>
        <button
          type="button"
          class="btn-main mx-1"
          @click="status = false"
          :class="{ 'bg-blue-700 text-white': status === false }"
        >
          Active
        </button>
        <button
          type="button"
          class="btn-main mx-1"
          @click="status = true"
          :class="{ 'bg-blue-700 text-white': status === true }"
        >
          Completed
        </button>
      </div>
      <div class="mt-3">
        <div
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
        </div>
      </div>
      <p>{{ computeRemainTodo.length }} left</p>
      <div class="-mx-1 flex mt-2">
        <button type="button" class="btn-main mx-1">
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
        >
          Clear Completed
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";

const store = reactive({ data: [] });
const status = ref(null);

onMounted(() => {
  store.data = JSON.parse(localStorage.getItem("todo")) || [];
});

const computeTodo = computed(() => {
  return store.data.filter(
    (todo) => status.value === null || status.value === todo.completed
  );
});

const computeRemainTodo = computed(() => {
  return store.data.filter((todo) => !todo.completed);
});

const handleSubmit = (e) => {
  const formData = new FormData(e.target);
  const todo = formData.get("todo");
  const id = new Date().getTime();
  store.data.push({ id, name: todo, completed: false });
  e.target.reset();
};

const handleDelete = (id) => {
  store.data = store.data.filter((todo) => todo.id !== id);
};

watch(store, () => {
  localStorage.setItem("todo", JSON.stringify(store.data));
});
</script>

<style lang="scss" scoped>
</style>