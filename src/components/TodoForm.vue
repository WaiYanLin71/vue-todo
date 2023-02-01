<template>
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
</template>

<script setup>
const { store } = defineProps(["store"]);

const handleSubmit = (e) => {
  const formData = new FormData(e.target);
  const todo = formData.get("todo");
  const id = new Date().getTime();
  store.data.push({ id, name: todo, completed: false });
  e.target.reset();
};
</script>

