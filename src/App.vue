<script setup>
// TO DO:
// [X] Kleuren & font
// [X] Add active link
// [X] Voeg muis plaatje toe naast naam
// [X] Ruimte tussen nav en rest
// [ ] hover
// [X] Style de buttons
// [X] Show the list of meals at the proper time
// [ ] Check if all things indeed need to be async
// [X] Create a card for the recipes
// [X] Change checkbox to select
// [X] Style the page
// [X] Add a few standards tasks to the calendar
// [ ] Add 2 unit test suites
// [X] eslint check
// [X] deploy on Github pages

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

<template>
  <header class="flex justify-center items-center my-8">
    <img src="@/assets/mouse.svg" id="mouse-img" />
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
