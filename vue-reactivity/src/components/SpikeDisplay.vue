<template>
  <div>
    <img :src="spike.image" :alt="spike.name" class="w-[80%] h-auto rounded-lg" />
    <h2 class="text-xl font-semibold mt-2">{{ spike.name }}</h2>
    <p class="text-l">Event: {{ spike.event }} - {{ spike.color }}</p>
    <p class="text-l">Price: ${{ spike.price }}</p>
    <p class="text-l">Link: {{ spike.url }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  spike: { type: Object },
})
</script>

<style scoped></style>
