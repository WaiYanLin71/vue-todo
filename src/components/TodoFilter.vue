<template>
  <div className="flex -mx-1 my-3">
    <button
      type="button"
      class="btn-main mx-1"
      @click="status.type = null"
      :class="{ 'bg-blue-700 text-white': status.type === null }"
    >
      All
    </button>
    <button
      type="button"
      class="btn-main mx-1"
      @click="status.type = false"
      :class="{ 'bg-blue-700 text-white': status.type === false }"
    >
      Active
    </button>
    <button
      type="button"
      class="btn-main mx-1"
      @click="status.type = true"
      :class="{ 'bg-blue-700 text-white': status.type === true }"
    >
      Completed
    </button>
  </div>
</template>

<script setup>

const { updateStatus, status } = defineProps(["updateStatus", "status"]);

</script>