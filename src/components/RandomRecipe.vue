<template>
    <div class="flex justify-center">
        <div class="text-center max-w-96">
            <h3>
            <b>{{ recipe }}</b>
            </h3>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  recipe: String,
});
</script>
