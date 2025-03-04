<template>
  <main>
    <h1 class="text-center text-white text-5xl">Nike Spikes</h1>
    <div class="flex flex-row w-full">
      <div class="container flex flex-wrap justify-around w-[75%] my-8">
        <div
          class="card flex flex-col justify-evenly items-center w-[27%] h-auto border-2 border-black mb-[3%] shadow-[9px_8px_0_black] rounded-2xl bg-white"
          v-for="spike in spikes"
          :key="spike.name"
        >
          <SpikeDisplay :spike="spike" />
        </div>
      </div>
      <div class="w-[20%] mx-auto">
        <h1 class="text-center text-white text-5xl">Cart</h1>
        <h2 class="text-center text-white text-3xl">Total</h2>
        <div class="container2 my-8 flex flex-col items-center justify-start bg-slate-500">
          <RemoveCart v-for="spike in cart" :key="spike.name" :spike="spike" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SpikeDisplay from '@/components/SpikeDisplay.vue'
import { spikes } from '@/components/items.js'
import { cart } from '@/components/cart.js'
import RemoveCart from '@/components/RemoveCart.vue'
console.log(spikes)
</script>

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
