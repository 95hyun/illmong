<template>
  <div id="app">
    <NavbarComp />
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    NavbarComp,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color : white;
  background: black;
  width: 100%;
  overflow-x: hidden; /* 전체 페이지에서 가로 오버플로우 방지 */
}
</style>
