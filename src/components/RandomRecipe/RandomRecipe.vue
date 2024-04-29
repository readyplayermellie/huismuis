<template>
  <div class="w-72 p-3 m-3 rounded-md recipe-card">
    <h3 class="text-sm">{{ props.recipe }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  recipe: String,
});
</script>
