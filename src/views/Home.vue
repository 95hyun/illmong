<!-- Home.vue -->
<template>
  <div class="home">
    <div class="content">
      <div class="image">
        <img src="@/assets/image/home/home_banner.jpeg" alt="홈 배너">
      </div>
      <div class="text" :class="{ 'fade-in': isTextVisible }">
        <h1>一夢</h1>
        <h3>일몽, illmong</h3>
        <h3>한자리의 꿈</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isTextVisible: false,
    };
  },
  mounted() {
    // 컴포넌트가 마운트되면 텍스트를 표시하여 페이드 인 효과를 트리거합니다.
    this.isTextVisible = true;
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  align-items: center;
  text-align: center;
}

.image img {
  max-width: 80%;
  height: auto;
}

.text {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  text-align: center;
}

.text.fade-in {
  opacity: 1;
}

.text h1 {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: bold;
}

.text h3 {
  font-size: 1em;
  color: #888;
}

/* PC 화면을 위한 스타일 */
@media (min-width: 768px) {
  .content {
    flex-direction: row; /* PC: 가로 배치 */
    align-items: center;
    text-align: left;
  }

  .image, .text {
    flex: 1;
  }

  .image {
    order: 2; /* 이미지를 오른쪽으로 배치 */
  }

  .text {
    order: 1; /* 텍스트를 왼쪽으로 배치 */
    opacity: 1; /* PC에서는 즉시 표시 */
  }

  .text h1 {
    font-size: 3em;
  }

  .text h3 {
    font-size: 1em;
  }
}
</style>