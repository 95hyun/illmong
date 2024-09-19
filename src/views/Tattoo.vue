<!-- Artwork.vue -->
<template>
  <div class="tattoo">
    <!-- 필요에 따라 서브 네비게이션을 추가할 수 있습니다 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TattooLayout',
};
</script>

<style scoped>
.tattoo {
  padding: 20px;
}
</style>