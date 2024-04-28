<template>
  <button @click="clickHandler">Give me a random recipe:</button>
  <p>Or get me 5 recipes based on one of the following categories:</p>
  <div class="flex justify-center">
    <div v-for="(item, index) in categories" :key="index" class="m-2">
      <input
        type="radio"
        :id="item"
        name="category"
        :value="item"
        v-model="chosenCategory"
        @change="inputHandler"
      />
      <label :for="item" class="pl-1">{{ item }}</label>
    </div>
  </div>
  <div v-if="meals.length > 0" v-for="(meal, index) in meals" :key="index">
    <RandomRecipe :recipe="meal" />
  </div>
</template>

<script setup>
import RandomRecipe from "@/components/RandomRecipe.vue";
// To do:
// [ ] Show the list of meals at the proper time
// [ ] Check if all things indeed need to be async
// [ ] Create a card for the recipes
// [ ] Style the page

import { useRecipeStore } from "@/stores/useRecipeStore";
import { ref, onMounted } from "vue";

const store = useRecipeStore();
let recipe = ref("");
let categories = ref("");
let meals = ref("");
let chosenCategory = ref("");

onMounted(async () => {
  categories.value = await store.getAllMealCategoriesAction();
});

async function inputHandler() {
  meals = await store.filterMealsByCategoryAction(chosenCategory.value);
}

async function clickHandler() {
  meals = await store.getRandomRecipeAction();
}
</script>
