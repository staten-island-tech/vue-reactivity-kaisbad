//composition api vue v4

<script>
import ShowSpikes from '@/components/ShowSpikes.vue'
</script>

<template>
  <div class="bg-blue-500">
    <h1>hello</h1>
    <div
      class="w-64 h-40 bg-cover bg-center rounded-lg shadow-lg"
      style="background-image: url('/track.jpg')"
    ></div>
    <ShowSpikes />
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
