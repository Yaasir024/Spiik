<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { mapGetters } from "vuex";
const store = useStore();

const user = computed(() => store.getters.users)
onBeforeMount(() => {
  console.log(user.uid)
  store.dispatch("fetchUser");
});
</script>

<template>
  <nav v-if="user" >
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/profile-form">Profile</RouterLink>
    <button @click="$store.dispatch('logout')">Logout</button>
  </nav>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
#app {
  padding: 0 20px;
}
</style>
