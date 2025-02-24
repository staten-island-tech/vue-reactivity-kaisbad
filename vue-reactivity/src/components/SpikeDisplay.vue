<template>
  <div class="text-center">
    <img class="w-[92%] h-auto rounded-lg mx-auto mt-3" :src="spike.image" :alt="spike.name" />
    <h2 class="text-xl font-bold mt-1">{{ spike.name }}</h2>
    <p class="text-l">Event: {{ spike.event }} - {{ spike.color }}</p>
    <p class="text-l">Price: ${{ spike.price }}</p>
    <p class="text-l">
      <a :href="spike.url" target="_blank" class="text-blue-500 underline">Click to Learn More</a>
    </p>
    <button @click="addToCart()" class="mt-1 mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { cart } from '@/components/cart'
const props = defineProps({
  spike: { type: Object, required: true },
})

console.log(props.spike)

function addToCart() {
  cart.push(props.spike)
  console.log(cart)
}
</script>

<style scoped></style>
