//composition api vue v4 //key is indentifier/what makes an item unique

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header class="lg:flex lg:items-center lg:pr-[var(--section-gap)/2] max-h-screen">
      <nav
        class="w-full text-xs text-center mt-8 lg:text-left lg:-ml-4 lg:text-base lg:py-4 lg:mt-4"
      >
        <!-- <RouterLink
          to="/"
          class="inline-block px-4 lg:border-l first:border-0 border-l border-[var(--color-border)] hover:bg-transparent"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="inline-block px-4 lg:border-l first:border-0 border-l border-[var(--color-border)] hover:bg-transparent"
          >About</RouterLink -->
        >
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
