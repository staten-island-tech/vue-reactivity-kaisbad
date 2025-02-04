<template>
  <div>
    <img :src="character.image" :alt="character.name" class="w-[80%] h-auto rounded-lg" />
    <h2 class="text-xl font-semibold mt-2">{{ character.name }}</h2>
    <p class="text-gray-600">{{ character.side }} - {{ character.gender }}</p>
    <p class="text-green-600 font-bold">${{ character.price.toFixed(2) }}</p>
  </div>
</template>

<script setup>
import Characters from './CharacterList.vue';
import {Characters} from CharacterList
</script>

<style scoped></style>
