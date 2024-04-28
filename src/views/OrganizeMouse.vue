<template>
    <div class="flex justify-center">
        <form @submit="addChore" class="flex flex-col max-w-80">
            <label for="chore" class="m-2">Add a chore that you have to do today:</label>
            <input type="text" id="chore" v-model="chore.text" required/>
            <label for="day" class="m-2">When do you need to do this?</label>
            <select name="days" id="day" v-model="chore.day" required>
            <option v-for="(day, index) in weekDays" :key="index" :value="day">
                {{ day }}
            </option>
            </select>
            <input type="submit" />
        </form>
    </div>
  <div class="flex justify-center flex-wrap">
    <div v-for="(day, index) in weekDays" :key="index" class="m-4 min-w-64 min-h-64 border-solid border border-slate-800 rounded-md">
        <p><b>{{ day }}</b></p>
        <ul v-for="(chore, index) in choreList[day]" :key="index">
        <li v-if="!chore.done">
            {{ chore.text }} on {{ chore.day }}
            <button @click="checkChore(index, day)">V</button>
            <button @click="removeChore(index, day)">X</button>
        </li>
        <li v-else>
            <s>{{ chore.text }} on {{ chore.day }}</s>
        </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const title = ref('Mouse around the house');
let chore = ref({
  text: "",
  day: "",
  done: false,
});
let choreList = reactive({
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
});
let choresDone = reactive([]);
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
