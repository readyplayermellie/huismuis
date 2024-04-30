/**
 * Service that retrieves a random recipe
 * @returns {object} Object with random meal data
 */
export const getRandomRecipe = async () => {
  return await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error("Error: ", error));
};

/**
 * Service that retrieves a list of categories
 * @returns {array} List of available categories
 */
export const getAllMealCategories = async () => {
  return await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => data.categories)
    .catch((error) => console.error("Error: ", error));
};

/**
 * Service that retrieves meals based on a category
 * @param {string} category
 * @returns {array} List of meal objects
 */
export const filterMealsByCategory = async (category) => {
  return await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  )
    .then((response) => response.json())
    .then((data) => data.meals)
    .catch((error) => console.error("Error: ", error));
};
