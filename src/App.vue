<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
#app {
  padding: 0 20px;
}
</style>
