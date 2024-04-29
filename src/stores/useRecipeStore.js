import { defineStore } from "pinia";
import {
  getRandomRecipe,
  getAllMealCategories,
  filterMealsByCategory,
} from "@/services/recipeServices";

export const useRecipeStore = defineStore("recipes", () => {
  async function getRandomRecipeAction() {
    let randomRecipe = [];
    const result = await getRandomRecipe();
    result.map((item) => {
      randomRecipe.push(item.strMeal);
    });
    return randomRecipe;
  }

  async function getAllMealCategoriesAction() {
    let allCategories = [];
    const result = await getAllMealCategories();
    result.map((item) => {
      allCategories.push(item.strCategory);
    });
    return allCategories;
  }

  async function filterMealsByCategoryAction(category) {
    let newArr = [];
    const result = await filterMealsByCategory(category);
    const splicedArr = result.splice(0, 5);
    splicedArr.map((item) => {
      newArr.push(item.strMeal);
    });
    return newArr;
  }

  return {
    getRandomRecipeAction,
    getAllMealCategoriesAction,
    filterMealsByCategoryAction,
  };
});
