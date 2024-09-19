<!-- Drawing.vue -->
<template>
  <div class="drawing">
    <h2>Drawing Gallery</h2>
    <div class="gallery">
      <!-- 이미지 갤러리를 여기에 구현하세요 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawingPage',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.drawing {
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