<template>
  <div class="flex justify-center mt-10">
    <form @submit="addChore" class="flex flex-col max-w-80">
      <label for="chore" class="m-2">Add a chore that you have to do:</label>
      <input
        type="text"
        id="chore"
        v-model="chore.text"
        required
        class="border rounded-sm border-red-950"
        autocomplete="off"
      />
      <label for="day" class="m-2">When do you need to do this?</label>
      <select
        name="days"
        id="day"
        v-model="chore.day"
        required
        class="border rounded-sm border-red-950"
      >
        <option v-for="(day, index) in weekDays" :key="index" :value="day">
          {{ day }}
        </option>
      </select>
      <input type="submit" class="btn m-8" />
    </form>
  </div>
  <div class="flex justify-center flex-wrap">
    <div
      v-for="(day, index) in weekDays"
      :key="index"
      class="m-4 min-w-64 min-h-64 border-solid border border-slate-800 rounded-md"
    >
      <p class="border-b border-red-950 mb-2 p-2">
        <b>{{ day }}</b>
      </p>
      <ul v-for="(chore, index) in choreList[day]" :key="index">
        <li v-if="!chore.done" class="text-sm">
          {{ chore.text }}
          <button @click="checkChore(index, day)" class="py-1 px-2 m-1">
            V
          </button>
          <button @click="removeChore(index, day)" class="py-1 px-2 m-1">
            X
          </button>
        </li>
        <li v-else class="text-sm">
          <s>{{ chore.text }} on {{ chore.day }}</s>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

let chore = ref({
  text: "",
  day: "",
  done: false,
});
let choreList = reactive({
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
});
let weekDays = ref([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);

function addChore(event) {
  event.preventDefault();
  choreList[chore.value.day].unshift(chore.value);
  chore.value = {
    text: "",
    day: "",
    done: false,
  };
}

function checkChore(index, day) {
  choreList[day][index].done = true;
  choreList[day].push(choreList[day].splice(index, 1)[0]);
}

function removeChore(index, day) {
  choreList[day].splice(index, 1);
}
</script>
