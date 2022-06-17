<script setup>
import Nav from "@/components/Nav.vue";
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { mapGetters } from "vuex";
const store = useStore();

const user = computed(() => store.getters.users);
onBeforeMount(() => {
  console.log(user.uid);
  store.dispatch("fetchUser");
});
</script>

<template>
  <Nav class="nav" />
  <nav v-if="user">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/messenger">Messenger</RouterLink>
    <button @click="$store.dispatch('logout')">Logout</button>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
main {
  /* padding: 0 20px; */
}
/* .nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
} */
@media only screen and (max-width: 450px) {
  .nav {
    top: initial;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
}
</style>
