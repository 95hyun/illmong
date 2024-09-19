<!-- Illust.vue -->
<template>
  <div class="illustPage">
    <h2>ILLUST</h2>
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
  name: 'IllustPage',
  data() {
    return {
      allImages: [
        { id: 37, src: require('@/assets/image/tattoo/illust/illust37.jpg'), alt: 'Illust 37', title: 'Illust 37' },
        { id: 36, src: require('@/assets/image/tattoo/illust/illust36.jpg'), alt: 'Illust 36', title: 'Illust 36' },
        { id: 35, src: require('@/assets/image/tattoo/illust/illust35.jpg'), alt: 'Illust 35', title: 'Illust 35' },
        { id: 34, src: require('@/assets/image/tattoo/illust/illust34.jpg'), alt: 'Illust 34', title: 'Illust 34' },
        { id: 33, src: require('@/assets/image/tattoo/illust/illust33.jpg'), alt: 'Illust 33', title: 'Illust 33' },
        { id: 32, src: require('@/assets/image/tattoo/illust/illust32.jpg'), alt: 'Illust 32', title: 'Illust 32' },
        { id: 31, src: require('@/assets/image/tattoo/illust/illust31.jpg'), alt: 'Illust 31', title: 'Illust 31' },
        { id: 30, src: require('@/assets/image/tattoo/illust/illust30.jpg'), alt: 'Illust 30', title: 'Illust 30' },
        { id: 29, src: require('@/assets/image/tattoo/illust/illust29.jpg'), alt: 'Illust 29', title: 'Illust 29' },
        { id: 28, src: require('@/assets/image/tattoo/illust/illust28.jpg'), alt: 'Illust 28', title: 'Illust 28' },
        { id: 27, src: require('@/assets/image/tattoo/illust/illust27.jpg'), alt: 'Illust 27', title: 'Illust 27' },
        { id: 26, src: require('@/assets/image/tattoo/illust/illust26.jpg'), alt: 'Illust 26', title: 'Illust 26' },
        { id: 25, src: require('@/assets/image/tattoo/illust/illust25.jpg'), alt: 'Illust 25', title: 'Illust 25' },
        { id: 24, src: require('@/assets/image/tattoo/illust/illust24.jpg'), alt: 'Illust 24', title: 'Illust 24' },
        { id: 23, src: require('@/assets/image/tattoo/illust/illust23.jpg'), alt: 'Illust 23', title: 'Illust 23' },
        { id: 22, src: require('@/assets/image/tattoo/illust/illust22.jpg'), alt: 'Illust 22', title: 'Illust 22' },
        { id: 21, src: require('@/assets/image/tattoo/illust/illust21.jpg'), alt: 'Illust 21', title: 'Illust 21' },
        { id: 20, src: require('@/assets/image/tattoo/illust/illust20.jpg'), alt: 'Illust 20', title: 'Illust 20' },
        { id: 19, src: require('@/assets/image/tattoo/illust/illust19.jpg'), alt: 'Illust 19', title: 'Illust 19' },
        { id: 18, src: require('@/assets/image/tattoo/illust/illust18.jpg'), alt: 'Illust 18', title: 'Illust 18' },
        { id: 17, src: require('@/assets/image/tattoo/illust/illust17.jpg'), alt: 'Illust 17', title: 'Illust 17' },
        { id: 16, src: require('@/assets/image/tattoo/illust/illust16.jpg'), alt: 'Illust 16', title: 'Illust 16' },
        { id: 15, src: require('@/assets/image/tattoo/illust/illust15.jpg'), alt: 'Illust 15', title: 'Illust 15' },
        { id: 14, src: require('@/assets/image/tattoo/illust/illust14.jpg'), alt: 'Illust 14', title: 'Illust 14' },
        { id: 13, src: require('@/assets/image/tattoo/illust/illust13.jpg'), alt: 'Illust 13', title: 'Illust 13' },
        { id: 12, src: require('@/assets/image/tattoo/illust/illust12.jpg'), alt: 'Illust 12', title: 'Illust 12' },
        { id: 11, src: require('@/assets/image/tattoo/illust/illust11.jpg'), alt: 'Illust 11', title: 'Illust 11' },
        { id: 10, src: require('@/assets/image/tattoo/illust/illust10.jpg'), alt: 'Illust 10', title: 'Illust 10' },
        { id: 9, src: require('@/assets/image/tattoo/illust/illust9.jpg'), alt: 'Illust 9', title: 'Illust 9' },
        { id: 8, src: require('@/assets/image/tattoo/illust/illust8.jpg'), alt: 'Illust 8', title: 'Illust 8' },
        { id: 7, src: require('@/assets/image/tattoo/illust/illust7.jpg'), alt: 'Illust 7', title: 'Illust 7' },
        { id: 6, src: require('@/assets/image/tattoo/illust/illust6.jpg'), alt: 'Illust 6', title: 'Illust 6' },
        { id: 5, src: require('@/assets/image/tattoo/illust/illust5.jpg'), alt: 'Illust 5', title: 'Illust 5' },
        { id: 4, src: require('@/assets/image/tattoo/illust/illust4.jpg'), alt: 'Illust 4', title: 'Illust 4' },
        { id: 3, src: require('@/assets/image/tattoo/illust/illust3.jpg'), alt: 'Illust 3', title: 'Illust 3' },
        { id: 2, src: require('@/assets/image/tattoo/illust/illust2.jpg'), alt: 'Illust 2', title: 'Illust 2' },
        { id: 1, src: require('@/assets/image/tattoo/illust/illust1.jpg'), alt: 'Illust 1', title: 'Illust 1' },
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
  /* 초기 opacity와 transform 제거 */
  /* opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease; */
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
