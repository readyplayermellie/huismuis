<template>
  <header class="flex justify-center items-center my-8">
    <img
      src="@/assets/mouse.svg"
      id="mouse-img"
    />
    <h1 class="text-3xl">{{ mainTitle }}</h1>
  </header>

  <nav>
    <RouterLink
      activeClass="nav-item"
      v-for="(item, index) in navItems"
      :key="index"
      class="p-2"
      :to="item.link"
      >{{ item.name }}
    </RouterLink>
  </nav>
  <main>
    <RouterView class="mt-10" />
  </main>
</template>

<script setup>
import { ref } from "vue";

const navItems = ref([
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/recipes",
    name: "Meals",
  },
  {
    link: "/organiser",
    name: "Organiser",
  },
]);
const mainTitle = ref("House Mouse");
</script>
