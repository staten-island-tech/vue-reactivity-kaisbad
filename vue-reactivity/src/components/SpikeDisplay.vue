<template>
  <div>
    <img :src="spike.image" :alt="spike.name" class="w-[80%] h-auto rounded-lg" />
    <h2 class="text-xl font-semibold mt-2">{{ spike.name }}</h2>
    <p class="text-l">{{ spike.event }} - {{ spike.color }}</p>
    <p class="text-l">${{ spike.price.toFixed(2) }}</p>
    <p class="text-l">${{ spike.url }}</p>
  </div>
</template>

<script setup>
defineProps({ spike: Object })
</script>

<style scoped></style>
