<!-- Home.vue -->
<template>
  <div class="home">
    <div class="content">
      <div class="image" :class="{ 'fade-in': isTextVisible }">
        <picture>
          <!-- 모바일 화면용 이미지 -->
          <source
              media="(max-width: 767px)"
              :srcset="require('@/assets/image/home/home_banner_mobile.jpg')"
          />
          <!-- 기본 PC 화면용 이미지 -->
          <img
              :src="require('@/assets/image/home/home_banner.jpg')"
              alt="홈 배너"
              loading="lazy"
          />
        </picture>
      </div>
      <!--
      <div class="text">
        <h1>一夢</h1>
        <h3>일몽, illmong</h3>
        <h3>한자리의 꿈</h3>
      </div>
      -->
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
    // 약간의 지연을 추가하여 애니메이션이 제대로 작동하도록 함
    setTimeout(() => {
      this.isTextVisible = true;
    }, 100); // 100ms 지연
  },
};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* 전체 뷰포트 높이 사용 */
  padding: 0; /* 패딩 제거 */
}

/* 콘텐츠 컨테이너 */
.content {
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
}

/* 이미지 컨테이너 */
.image {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
}

.image.fade-in {
  opacity: 1;
}

.image picture img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px; /* 이미지에 약간의 둥근 모서리 추가 (선택 사항) */
}

/* PC 화면을 위한 스타일 */
@media (min-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: left;
  }

  .image {
    margin: 0; /* PC에서의 마진 제거 */
    flex: 1;
    opacity: 0; /* 초기 상태를 투명하게 설정 */
  }

  .image.fade-in {
    opacity: 1;
  }

  .image picture img {
    max-width: 100%;
  }

  /* 텍스트가 필요할 경우 아래 주석을 해제하여 사용하세요 */
  /*
  .text {
    flex: 1;
    padding-left: 40px;
    opacity: 1; /* PC에서는 즉시 표시 */
}

.text h1 {
  font-size: 3em;
}

.text h3 {
  font-size: 1em;
}

/* 모바일 스타일 */
@media (max-width: 767px) {
  .image {
    max-width: 90%; /* 모바일에서 이미지 크기 조정 */
  }
}

/* 추가적인 작은 모바일 스타일 */
@media (max-width: 480px) {
  .image {
    max-width: 100%; /* 모바일에서 이미지 크기 조정 */
  }
}
</style>
