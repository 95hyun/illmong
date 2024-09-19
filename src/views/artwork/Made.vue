<!-- Drawing.vue -->
<template>
  <div class="made">
    <h2>새로운 경험을 준비 중입니다</h2>
    <div class="gallery">
      <!-- 이미지 갤러리를 여기에 구현하세요 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadePage',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.made {
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

.made h2 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 1em;
  color: whitesmoke;
}
</style>