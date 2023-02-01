<template>
  <Container>
    <Card>
      <TodoForm :store="store" />
      <TodoFilter :status="status" />
      <TodoList :store="store" :status="status" />
      <TodoFooter :store="store" />
    </Card>
  </Container>
</template>

<script setup>
import { reactive } from "vue";
import Card from "./components/common/Card.vue";
import Container from "./components/common/Container.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import useStore from "./hooks/useStore";

const store = useStore();
const status = reactive({type : null});

</script>