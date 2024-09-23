<!-- BlackAndGrey.vue -->
<template>
  <div class="illustPage">
    <h2 :class="{ 'fade-in': isContentVisible }">BLACK AND GREY</h2>
    <div class="gallery" :class="{ 'fade-in': isContentVisible }">
      <transition-group name="fade" tag="div">
        <div
            class="gallery-item fade-in-item"
            v-for="image in displayedImages"
            :key="image.id"
            @click="openModal(image)"
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

    <!-- 모달 창 -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlackAndGreyPage',
  data() {
    return {
      isContentVisible: false,
      showModal: false,
      selectedImage: null,
      allImages: [
        { id: 11, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey11.jpg'), alt: 'BlackAndGrey 11', title: 'David' },
        { id: 10, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey10.jpg'), alt: 'BlackAndGrey 10', title: 'Broken watch' },
        { id: 9, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey9.jpg'), alt: 'BlackAndGrey 9', title: 'DIKE' },
        { id: 8, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey8.jpg'), alt: 'BlackAndGrey 8', title: 'angel' },
        { id: 7, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey7.jpg'), alt: 'BlackAndGrey 7', title: 'hannya & skull & blossom' },
        { id: 6, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey6.jpg'), alt: 'BlackAndGrey 6', title: 'RAIDEN [Mortal Kombat]' },
        { id: 5, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey5.jpg'), alt: 'BlackAndGrey 5', title: 'Hannya & samurai' },
        { id: 4, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey4.jpg'), alt: 'BlackAndGrey 4', title: 'Apollon' },
        { id: 3, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey3.jpg'), alt: 'BlackAndGrey 3', title: 'tiger' },
        { id: 2, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey2.jpg'), alt: 'BlackAndGrey 2', title: 'Money flower & chicano pistol' },
        { id: 1, src: require('@/assets/image/tattoo/blackandgrey/blackandgrey1.jpg'), alt: 'BlackAndGrey 1', title: 'flowers' },
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

    // Fade-in 애니메이션 트리거
    setTimeout(() => {
      this.isContentVisible = true;
    }, 100); // 100ms 지연
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
    openModal(image) {
      this.selectedImage = image;
      this.showModal = true;
      document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    },
    closeModal() {
      this.showModal = false;
      this.selectedImage = null;
      document.body.style.overflow = ''; // 스크롤 복원
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
  /* padding: 40px 20px; */
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: #121212; */ /* 어두운 배경색 추가 (선택 사항) */
  min-height: 80vh; /* Home.vue와 유사하게 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.illustPage h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: whitesmoke; /* 텍스트 색상 변경 */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.illustPage h2.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.gallery {
  /* Masonry Layout using CSS Columns */
  column-count: 3;
  column-gap: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.gallery.fade-in {
  opacity: 1;
}

.gallery-item {
  position: relative;
  margin-bottom: 20px;
  break-inside: avoid;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  cursor: pointer;
}

.gallery-item.fade-in-item {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item img {
  width: 100%;
  height: 100%;
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

/* 모달 스타일 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 반투명 검은색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 다른 요소보다 위에 표시 */
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  border-radius: 8px;
  animation: scaleIn 0.3s ease-in-out;
}

.modal-content img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* 애니메이션 정의 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
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
