import MealView from "./MealView.vue"
import { mount } from "@vue/test-utils"
import { createTestingPinia } from '@pinia/testing';
import { useRecipeStore } from "@/stores/useRecipeStore";

describe("MealView", () => {
    it("renders properly", () => {
        const wrapper = mount(MealView, {
            global: {
                plugins: [
                    createTestingPinia()
                ]
            }
        });
        const store = useRecipeStore();

        expect(wrapper.vm.categories).toEqual([]);
        expect(wrapper.vm.meals).toEqual([]);
        expect(wrapper.vm.chosenCategory).toEqual("");
        expect(wrapper.exists()).toBe(true);
    });
    it('calls the getAllMealCategoriesAction when component is mounted', () => {
        const wrapper = mount(MealView, {
            global: {
                plugins: [
                    createTestingPinia()
                ]
            }
        });
        const store = useRecipeStore();

        expect(store.getAllMealCategoriesAction).toHaveBeenCalledTimes(1);
    });
    it('calls the filterMealsByCategoryAction when the categorySelected function is called', () => {
        const wrapper = mount(MealView, {
            global: {
                plugins: [
                    createTestingPinia()
                ]
            }
        });
        const store = useRecipeStore();
        wrapper.vm.chosenCategory = 'Pasta';

        wrapper.vm.categorySelected();

        expect(store.filterMealsByCategoryAction).toHaveBeenCalledWith('Pasta');
    });
    it('calls the getRandomRecipeAction when the generateRandomRecipe function is called', () => {
        const wrapper = mount(MealView, {
            global: {
                plugins: [
                    createTestingPinia()
                ]
            }
        });
        const store = useRecipeStore();

        wrapper.vm.generateRandomRecipe();

        expect(store.getRandomRecipeAction).toHaveBeenCalledTimes(1);
    });
});