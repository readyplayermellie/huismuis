import OrganiseView from "./OrganiseView.vue"
import { mount } from "@vue/test-utils"

describe("OrganiseView", () => {
    it("renders properly", () => {
        const wrapper = mount(OrganiseView)

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.vm.chore).toEqual({
            day: '',
            text: '',
            done: false
        });
        expect(wrapper.vm.weekDays).toEqual([
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ]);
        expect(wrapper.vm.choreList).toEqual({
            Monday: [
              {
                text: "Clean bathroom",
                day: "Monday",
              },
            ],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [
              {
                text: "Enjoy life",
                day: "Friday",
              },
            ],
            Saturday: [],
            Sunday: [
              {
                text: "Clean kitchen",
                day: "Sunday",
              },
              {
                text: "Prep meals",
                day: "Sunday",
              },
            ],
          })
    });
});