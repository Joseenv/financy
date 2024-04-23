<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

  <ul>
    <li>
      <RouterLink to="/#hero">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/#services">Services</RouterLink>
    </li>
    <li>
      <RouterLink to="/#about">About</RouterLink>
    </li>
    <li>
      <RouterLink to="/#contact">Contact</RouterLink>
    </li>
  </ul>
</template>


<style scoped></style>