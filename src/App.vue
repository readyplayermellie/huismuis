<script setup>
import { ref } from "vue";

const navItems = ref([
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/recipes",
    name: "Meal Mouse",
  },
  {
    link: "/organizer",
    name: "Mouse around the house",
  },
]);
const mainTitle = ref("House Mouse");
</script>

<template>
  <h1>{{ mainTitle }}</h1>
  <nav class="border-b">
    <RouterLink
      v-for="(item, index) in navItems"
      :key="index"
      class="p-2"
      :to="item.link"
      >{{ item.name }}</RouterLink
    >
  </nav>
  <main>
    <RouterView class="mt-10" />
  </main>
</template>
