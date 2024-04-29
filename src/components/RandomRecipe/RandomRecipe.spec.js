import RandomRecipe from "./RandomRecipe.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from 'vitest';

describe("RandomRecipe", () => {
    it("renders properly", () => {
        const wrapper = mount(RandomRecipe, { props: { recipe: "Pancakes" } })

        expect(wrapper.text()).toContain("Pancakes")
    });
});