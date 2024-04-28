<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <header class="w-full h-12 bg-base-dark">
      <nav class="max-w-screen-xl  h-full flex items-center justify-between px-4">
        <div class="">
          <h1 class="text-base-light text-xl font-bold">
            <span>Financy</span>
            <span class="text-brand-primary">.</span>
          </h1>
        </div>
        <HeaderToggle />
        <!-- <HeaderNavigation /> -->
      </nav>
    </header>
    <RouterView />
  </main>
</template>