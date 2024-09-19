<!-- Drawing.vue -->
<template>
  <div class="colorPage">
    <h2>Color Tattoo Gallery</h2>
    <div class="gallery">
      <!-- 이미지 갤러리를 여기에 구현하세요 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPage',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.colorPage {
  padding: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 200px;
  margin: 10px;
}
</style>