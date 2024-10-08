<!-- Uv.vue -->
<template>
  <div class="illustPage">
    <h2>UV</h2>
    <h3>새로운 경험을 준비 중입니다.</h3>
    <div class="gallery">
      <transition-group name="fade" tag="div">
        <div
            class="gallery-item"
            v-for="image in displayedImages"
            :key="image.id"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <div class="overlay">
            <div class="text">{{ image.title }}</div>
          </div>
        </div>
      </transition-group>
    </div>
    <!-- 스크롤 감지를 위한 요소 -->
    <div ref="scrollTrigger" class="scroll-trigger"></div>
  </div>
</template>

<script>
export default {
  name: 'UvPage',
  data() {
    return {
      allImages: [
        // 아직 이미지가 없으므로 빈 배열로 설정하거나, 추후에 추가하세요.
        // 예시:
        // { id: 1, src: require('@/assets/image/tattoo/uv/uv1.jpg'), alt: 'UV 1', title: 'UV 1' },
      ],
      displayedImages: [],
      imagesPerLoad: 6, // 한 번에 로드할 이미지 수
      observer: null,
      allLoaded: false, // 모든 이미지가 로드되었는지 여부
    };
  },
  mounted() {
    this.loadImages();

    // Intersection Observer를 사용하여 스크롤 시 이미지 로드
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '0px 0px 200px 0px', // rootMargin을 늘려서 더 일찍 트리거되도록 설정
      threshold: 0.1,
    });

    if (this.$refs.scrollTrigger) {
      this.observer.observe(this.$refs.scrollTrigger);
    }

    // 초기 로드 후 콘텐츠가 뷰포트를 채우지 못하면 추가 로드
    this.$nextTick(() => {
      const galleryHeight = this.$el.querySelector('.gallery').offsetHeight;
      const windowHeight = window.innerHeight;
      if (galleryHeight < windowHeight) {
        this.loadImages();
      }
    });
  },
  methods: {
    loadImages() {
      if (this.allLoaded) return;

      const nextImages = this.allImages.slice(
          this.displayedImages.length,
          this.displayedImages.length + this.imagesPerLoad
      );

      if (nextImages.length === 0) {
        this.allLoaded = true;
        if (this.observer && this.$refs.scrollTrigger) {
          this.observer.unobserve(this.$refs.scrollTrigger);
        }
        return;
      }

      this.displayedImages = [...this.displayedImages, ...nextImages];

      // 모든 이미지가 로드되었는지 확인
      if (this.displayedImages.length >= this.allImages.length) {
        this.allLoaded = true;
        if (this.observer && this.$refs.scrollTrigger) {
          this.observer.unobserve(this.$refs.scrollTrigger);
        }
      }
    },
    handleIntersect(entries) {
      const entry = entries[0];
      if (entry.isIntersecting && !this.allLoaded) {
        this.loadImages();
      }
    },
  },
  beforeUnmount() {
    if (this.observer && this.$refs.scrollTrigger) {
      this.observer.unobserve(this.$refs.scrollTrigger);
    }
  },
};
</script>

<style scoped>
.illustPage {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  //background-color: #121212; /* 어두운 배경색 추가 */
  min-height: 100vh;
}

.illustPage h2 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2em;
  color: whitesmoke;
}

.illustPage h3 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 1em;
  color: whitesmoke;
}

.gallery {
  /* Masonry Layout using CSS Columns */
  column-count: 3;
  column-gap: 20px;
}

.gallery-item {
  position: relative;
  margin-bottom: 20px;
  break-inside: avoid;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* 반투명 검은색 배경 */
  color: #fff;
  width: 100%;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  padding: 10px;
  text-align: center;
}

.gallery-item:hover .overlay {
  transform: translateY(0);
}

.overlay .text {
  font-size: 1.2em;
}

/* Transition Group 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}

/* 반응형 디자인: 태블릿 및 PC */
@media (min-width: 768px) {
  .gallery {
    column-count: 3;
    column-gap: 20px;
  }

  .illustPage h2 {
    font-size: 3em;
  }

  .overlay .text {
    font-size: 1.4em;
  }
}

/* 반응형 디자인: 모바일 */
@media (max-width: 767px) {
  .gallery {
    column-count: 2;
    column-gap: 15px;
  }

  .illustPage h2 {
    font-size: 2em;
  }

  .overlay .text {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .gallery {
    column-count: 1;
    column-gap: 10px;
  }

  .illustPage h2 {
    font-size: 1.8em;
  }

  .overlay .text {
    font-size: 0.9em;
  }
}

/* 스크롤 트리거 요소 숨기기 */
.scroll-trigger {
  height: 1px;
}
</style>
