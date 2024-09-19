<!-- Mini.vue -->
<template>
  <div class="illustPage">
    <h2>MINI (Lettering)</h2>
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
  name: 'MiniPage',
  data() {
    return {
      allImages: [
        { id: 14, src: require('@/assets/image/tattoo/mini/mini14.jpg'), alt: 'Mini 14', title: 'Mini 14' },
        { id: 13, src: require('@/assets/image/tattoo/mini/mini13.jpg'), alt: 'Mini 13', title: 'Mini 13' },
        { id: 12, src: require('@/assets/image/tattoo/mini/mini12.jpg'), alt: 'Mini 12', title: 'Mini 12' },
        { id: 11, src: require('@/assets/image/tattoo/mini/mini11.jpg'), alt: 'Mini 11', title: 'Mini 11' },
        { id: 10, src: require('@/assets/image/tattoo/mini/mini10.jpg'), alt: 'Mini 10', title: 'Mini 10' },
        { id: 9, src: require('@/assets/image/tattoo/mini/mini9.jpg'), alt: 'Mini 9', title: 'Mini 9' },
        { id: 8, src: require('@/assets/image/tattoo/mini/mini8.jpg'), alt: 'Mini 8', title: 'Mini 8' },
        { id: 7, src: require('@/assets/image/tattoo/mini/mini7.jpg'), alt: 'Mini 7', title: 'Mini 7' },
        { id: 6, src: require('@/assets/image/tattoo/mini/mini6.jpg'), alt: 'Mini 6', title: 'Mini 6' },
        { id: 5, src: require('@/assets/image/tattoo/mini/mini5.jpg'), alt: 'Mini 5', title: 'Mini 5' },
        { id: 4, src: require('@/assets/image/tattoo/mini/mini4.jpg'), alt: 'Mini 4', title: 'Mini 4' },
        { id: 3, src: require('@/assets/image/tattoo/mini/mini3.jpg'), alt: 'Mini 3', title: 'Mini 3' },
        { id: 2, src: require('@/assets/image/tattoo/mini/mini2.jpg'), alt: 'Mini 2', title: 'Mini 2' },
        { id: 1, src: require('@/assets/image/tattoo/mini/mini1.jpg'), alt: 'Mini 1', title: 'Mini 1' },
      ],
      displayedImages: [],
      imagesPerLoad: 6, // 한 번에 로드할 이미지 수
      observer: null,
    };
  },
  mounted() {
    this.loadImages();

    // Intersection Observer를 사용하여 스크롤 시 이미지 로드
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (this.$refs.scrollTrigger) {
      this.observer.observe(this.$refs.scrollTrigger);
    }
  },
  methods: {
    loadImages() {
      const nextImages = this.allImages.slice(
          this.displayedImages.length,
          this.displayedImages.length + this.imagesPerLoad
      );
      this.displayedImages = [...this.displayedImages, ...nextImages];
    },
    handleIntersect(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
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
