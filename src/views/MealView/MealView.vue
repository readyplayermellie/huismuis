<template>
  <div class="mt-10">
    <button @click="generateRandomRecipe" class="mb-4">
      Generate a random recipe
    </button>
    <p class="m-2">
      Or get a list of 5 recipes based on one of the following categories:
    </p>
    <select
      name="categories"
      v-model="chosenCategory"
      required
      class="border rounded-sm border-red-950"
      @change="categorySelected"
    >
      <option v-for="(item, index) in categories" :key="index">
        {{ item }}
      </option>
    </select>
    <div v-if="meals?.length > 0" class="m-8 flex flex-wrap justify-center">
      <RandomRecipe :recipe="meal" v-for="(meal, index) in meals" :key="index" />
    </div>
  </div>
</template>

<script setup>
import RandomRecipe from "@/components/RandomRecipe/RandomRecipe.vue";

import { useRecipeStore } from "@/stores/useRecipeStore";
import { ref, onMounted } from "vue";

const store = useRecipeStore();
let categories = ref([]);
let meals = ref([]);
let chosenCategory = ref("");

onMounted(async () => {
  categories.value = await store.getAllMealCategoriesAction();
});

async function categorySelected() {
  meals.value = await store.filterMealsByCategoryAction(chosenCategory.value);
}

async function generateRandomRecipe() {
  meals.value = await store.getRandomRecipeAction();
}
</script>
