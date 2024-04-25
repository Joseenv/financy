<template>
  <section class="px-4 py-8">
    <div class="relative w-full h-fit">
      <img src="../../assets/pattern.svg" alt="Financy Background Pattern Image"
        class="w-full h-full object-contain z-10">
      <img src="../../assets/hero-img.webp" alt="Financy Hero Image"
        class="absolute -top-[8px] left-0 w-full h-full object-contain z-20 scale-105">
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <h2 class="text-[2rem] leading-10 text-base-light uppercase font-semibold">
        Make you Financial management easier
      </h2>
      <p class="text-sm text-base-dark-60">
        Financy is a mobile application that can help you manage your finances in a simple way.
      </p>
    </div>
    <div class="max-w-fit mt-10 group">
      <button class="bg-brand-tertiary p-3 rounded-full">
        <RouterLink to="/auth" class="flex items-center gap-3">
          <img src="../../assets/arrow.svg" alt="Continue Icon Button" class="text-white">
        </RouterLink>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>