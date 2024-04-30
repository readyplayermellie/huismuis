<template>
  <div>
    <h2 class="text-2xl mb-8">{{ title }}</h2>
    <p>{{ content }}</p>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Home is where the mouse is");
const content = ref(
  "House Mouse is everyone's favorite mouse. It can help you plan meals on days that you really don't know what to eat or are out of inspiration. It can also help you create some structure in your weekly maintenance tasks, so your house will stay clean and you will not be overwhelmed by menial tasks.",
);
const subtitle = ref("A work in progress, but always progressing!");
</script>
