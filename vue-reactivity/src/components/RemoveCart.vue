<template>
  <div
    class="card flex flex-col justify-evenly items-center w-[70%] h-auto border-2 border-black mb-[3%] shadow-[9px_8px_0_black] rounded-2xl bg-white my-3"
  >
    <img class="w-[92%] h-auto rounded-lg mx-auto mt-3" :src="spike.image" :alt="spike.name" />
    <h2 class="text-xl font-semibold mt-2 text-center">{{ spike.name }}</h2>
    <p class="text-l">Event: {{ spike.event }} - {{ spike.color }}</p>
    <p class="text-l text-center">Price: ${{ spike.price }}</p>
    <button
      @click="removeFromCart()"
      class="mt-1 mb-2 bg-red-500 text-white px-4 py-2 rounded-lg text-center"
    >
      Remove from Cart
    </button>
  </div>
</template>

<script setup>
import { cart } from '@/components/cart'
const props = defineProps({
  spike: { type: Object, required: true },
})

function removeFromCart() {
  const index = cart.indexOf(props.spike)
  if (index !== -1) {
    cart.splice(index, 1)
    console.log('Removed from cart:', props.spike)
  }
}
</script>

<style scoped></style>
