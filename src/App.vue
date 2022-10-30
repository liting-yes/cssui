<template>
  <sidebar>
    <NavBar></NavBar>
  </sidebar>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>
