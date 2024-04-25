<script setup lang="ts">
import HeaderLogo from '../header/HeaderLogo.vue';
import HeaderNavigation from '../header/HeaderNavigation.vue';
import HeaderToggle from '../header/HeaderToggle.vue';


</script>

<template>
  <header class="w-full h-12 bg-base-dark">
    <nav class="max-w-screen-xl  h-full flex items-center justify-between px-4">
      <HeaderLogo />
      <HeaderToggle />
      <!-- <HeaderNavigation /> -->
    </nav>
  </header>
</template>