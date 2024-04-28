// to do:
// [ ] return the response of the fetch calls

export const getRandomRecipe = async () => {
  return await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error("Error: ", error));
};

export const getAllMealCategories = async () => {
  return await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => data.categories)
    .catch((error) => console.error("Error: ", error));
};

export const filterMealsByCategory = async (category) => {
  return await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  )
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error("Error: ", error));
};
