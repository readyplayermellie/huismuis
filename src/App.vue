<script setup></script>

<template>
  <h1>House Mouse v1</h1>
  <nav class="text-center">
    <RouterLink class="p-2" to="/">Home</RouterLink>
    <RouterLink class="p-2" to="/recipes">Meal Mouse</RouterLink>
    <RouterLink class="p-2" to="/organizer">Mouse around the house</RouterLink>
  </nav>
  <main>
    <RouterView class="text-center mt-10" />
  </main>
</template>
