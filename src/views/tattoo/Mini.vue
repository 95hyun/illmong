<!-- Drawing.vue -->
<template>
  <div class="miniPage">
    <h2>Mini (Lettering) Gallery</h2>
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
.miniPage {
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