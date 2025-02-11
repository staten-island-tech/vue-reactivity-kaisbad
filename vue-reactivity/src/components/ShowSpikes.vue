<template>
  <div class="container flex flex-wrap justify-around w-full mx-auto my-8">
    <h1>Nike Spikes</h1>
    <div
      v-for="spike in spikes"
      :key="spike.name"
      class="card flex flex-col justify-evenly items-center w-[27%] h-auto border-2 border-black mb-[3%] shadow-[9px_8px_0_black] rounded-2xl"
    ></div>
    <SpikeDisplay :spike="spike" />
  </div>
</template>

<script setup>
import SpikeDisplay from './SpikeDisplay.vue'
import { spikes } from '@/main'
</script>

<style scoped></style>
