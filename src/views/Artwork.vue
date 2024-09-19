<!-- Artwork.vue -->
<template>
  <div class="artwork">
    <h1>Artwork</h1>
    <!-- 필요에 따라 서브 네비게이션을 추가할 수 있습니다 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ArtworkLayout',
};
</script>

<style scoped>
.artwork {
  padding: 10px;
  text-align: center;
}
</style>