//composition api vue v4

<script setup>
import SpikeDisplay from '@/components/SpikeDisplay.vue'
import spikes
</script>

<template>
  <div class="container flex flex-wrap justify-around w-full mx-auto my-8">
    <h1>Nike Spikes</h1>
    <div
      class="card flex flex-col justify-evenly items-center w-[27%] h-auto border-2 border-black mb-[3%] shadow-[9px_8px_0_black] rounded-2xl"
      v-for="spike in spikes"
      :key="spike.name"
    ></div>
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
