//composition api vue v4

<script setup>
import ShowSpikes from '@/components/ShowSpikes.vue'
import SpikeDisplay from '@/components/SpikeDisplay.vue'
</script>

<template>
  <div class="bg-blue-500">
    <h1>hello</h1>

    <ShowSpikes />
    <SpikeDisplay />
  </div>
</template>

<style scoped></style>

<!-- <script setup>
import AnimalCard from '../components/AnimalCard.vue'
import LogIn from '../components/LogIn.vue'
const animals = [
  { name: 'Walrus', image: '/walrus.webp' },
  { name: 'Mark Fridlan', image: '/mark.jpg' },
]
</script>

<template>
  <div class="container">
    <LogIn message="Hello Agnes"></LogIn>
    <AnimalCard v-for="animal in animals" :key="animal.name" :animal="animal" />
  </div>
</template>
 -->
