<template>
  <div class="container flex flex-wrap justify-around w-[100vw] mx-auto my-8">
    <h1>Characters</h1>
    <div
      v-for="character in characters"
      :key="character.name"
      class="card flex flex-col justify-evenly items-center w-[60%] h-auto border-2 border-black mb-[3%] shadow-[9px_8px_0_black] rounded-2xl>"
    ></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const characters = [
  {
    name: 'Ace',
    gender: 'Male',
    side: 'Attacker',
    price: 19.99,
    image: 'ace.jpg',
  },
  {
    name: 'Alibi',
    gender: 'Female',
    side: 'Defender',
    price: 14.99,
    image: 'alibi.jpg',
  },
  {
    name: 'Amaru',
    gender: 'Female',
    side: 'Attacker',
    price: 9.99,
    image: 'amaru.jpg',
  },
  {
    name: 'Aruni',
    gender: 'Female',
    side: 'Defender',
    price: 9.99,
    image: 'aruni.jpg',
  },
  {
    name: 'Ash',
    gender: 'Female',
    side: 'Attacker',
    price: 19.99,
    image: 'ash.jpg',
  },
  {
    name: 'Azami',
    gender: 'Female',
    side: 'Defender',
    price: 14.99,
    image: 'azami.jpg',
  },
  {
    name: 'Bandit',
    gender: 'Male',
    side: 'Defender',
    price: 9.99,
    image: 'bandit.jpg',
  },
  {
    name: 'Blitz',
    gender: 'Male',
    side: 'Attacker',
    price: 14.99,
    image: 'blitz.jpg',
  },
  {
    name: 'Brava',
    gender: 'Female',
    side: 'Attacker',
    price: 14.99,
    image: 'brava.jpg',
  },
  {
    name: 'Buck',
    gender: 'Male',
    side: 'Attacker',
    price: 14.99,
    image: 'buck.jpg',
  },
  {
    name: 'Castle',
    gender: 'Male',
    side: 'Defender',
    price: 9.99,
    image: 'castle.jpg',
  },
  {
    name: 'Caveira',
    gender: 'Female',
    side: 'Defender',
    price: 9.99,
    image: 'caveira.jpg',
  },
  {
    name: 'Clash',
    gender: 'Female',
    side: 'Defender',
    price: 9.99,
    image: 'clash.jpg',
  },
  {
    name: 'Deimos',
    gender: 'Male',
    side: 'Attacker',
    price: 19.99,
    image: 'deimos.jpg',
  },
  {
    name: 'Doc',
    gender: 'Male',
    side: 'Defender',
    price: 14.99,
    image: 'doc.jpg',
  },
  {
    name: 'Dokkaebi',
    gender: 'Female',
    side: 'Attacker',
    price: 19.99,
    image: 'dokkaebi.jpg',
  },
  {
    name: 'Echo',
    gender: 'Male',
    side: 'Defender',
    price: 9.99,
    image: 'echo.jpg',
  },
  {
    name: 'Ela',
    gender: 'Female',
    side: 'Defender',
    price: 9.99,
    image: 'ela.jpg',
  },
  {
    name: 'Fuze',
    gender: 'Male',
    side: 'Attacker',
    price: 9.99,
    image: 'fuze.jpg',
  },
  {
    name: 'Glaz',
    gender: 'Male',
    side: 'Attacker',
    price: 9.99,
    image: 'glaz.jpg',
  },
]
</script>

<style scoped></style>
