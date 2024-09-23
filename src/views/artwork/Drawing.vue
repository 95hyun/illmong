<!-- Drawing.vue -->
<template>
  <div class="drawing">
    <h2>DRAWING</h2>
    <div class="gallery" :class="{ 'fade-in': isContentVisible }">
      <div
          class="gallery-item"
          v-for="(image, index) in images"
          :key="index"
          @click="openModal(image)"
          :class="{ 'fade-in-item': isContentVisible }"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy" />
        <div class="overlay">
          <div class="text">{{ image.title }}</div>
        </div>
      </div>
    </div>

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
  name: 'DrawingPage',
  data() {
    return {
      isContentVisible: false,
      showModal: false,
      selectedImage: null,
      images: [
        { src: require('@/assets/image/artwork/drawing1.jpeg'), alt: 'Drawing 1', title: '화양연화- 花樣年華' },
        { src: require('@/assets/image/artwork/drawing2.jpeg'), alt: 'Drawing 2', title: 'BERSERK Grunbeld' },
        { src: require('@/assets/image/artwork/drawing3.jpeg'), alt: 'Drawing 3', title: '순애- 純愛' },
        { src: require('@/assets/image/artwork/drawing4.jpeg'), alt: 'Drawing 4', title: '일장춘몽 - 一場春夢' },
        { src: require('@/assets/image/artwork/drawing5.jpeg'), alt: 'Drawing 5', title: '美 [Ito junji - tomie]' },
        { src: require('@/assets/image/artwork/drawing6.jpeg'), alt: 'Drawing 6', title: '야차 - 夜叉' },
        { src: require('@/assets/image/artwork/drawing7.jpeg'), alt: 'Drawing 7', title: 'John the apostle' },
        { src: require('@/assets/image/artwork/drawing8.jpeg'), alt: 'Drawing 8', title: '단죄-斷罪' },
        { src: require('@/assets/image/artwork/drawing9.jpg'), alt: 'Drawing 9', title: '발도-拔刀' },
        { src: require('@/assets/image/artwork/eva-2.jpg'), alt: 'Drawing 10', title: 'Eva-2' },
        { src: require('@/assets/image/artwork/GEAS.jpg'), alt: 'Drawing 11', title: 'GEAS' },
        { src: require('@/assets/image/artwork/hell_boy.jpg'), alt: 'Drawing 12', title: 'Hell Boy' },
        { src: require('@/assets/image/artwork/corpse_bride.jpg'), alt: 'Drawing 13', title: 'corpse bride' },
        { src: require('@/assets/image/artwork/Berserk_Griffith.jpg'), alt: 'Drawing 14', title: 'Berserk Griffith' },
        { src: require('@/assets/image/artwork/Berserk_Guts.jpg'), alt: 'Drawing 15', title: 'Berserk Guts' },
        { src: require('@/assets/image/artwork/Berserk_skull_knight.jpg'), alt: 'Drawing 16', title: 'Berserk skull knight' },
        { src: require('@/assets/image/artwork/Blackrose.jpg'), alt: 'Drawing 17', title: 'Blackrose' },
        { src: require('@/assets/image/artwork/CATHARSIS.jpg'), alt: 'Drawing 18', title: 'CATHARSIS' },
        { src: require('@/assets/image/artwork/Huggin.jpg'), alt: 'Drawing 19', title: 'Huggin' },
        { src: require('@/assets/image/artwork/illmong_x_payby.jpg'), alt: 'Drawing 20', title: 'illmong x payby' },
        { src: require('@/assets/image/artwork/lust_for_dead.jpg'), alt: 'Drawing 21', title: 'lust for dead' },
        { src: require('@/assets/image/artwork/lust_for_life.jpg'), alt: 'Drawing 22', title: 'lust for life' },
        { src: require('@/assets/image/artwork/Philosophos.jpg'), alt: 'Drawing 23', title: 'Philosophos' },
        { src: require('@/assets/image/artwork/Si vis pacem, para bellum.jpg'), alt: 'Drawing 24', title: 'Si vis pacem, para bellum' },
        { src: require('@/assets/image/artwork/the_batman.jpg'), alt: 'Drawing 25', title: 'THE BATMAN' },
        { src: require('@/assets/image/artwork/근원.jpg'), alt: 'Drawing 26', title: '근원 根源' },
        { src: require('@/assets/image/artwork/비몽사몽.jpg'), alt: 'Drawing 27', title: '비몽사몽 非夢似夢' },
        { src: require('@/assets/image/artwork/성영.jpg'), alt: 'Drawing 28', title: '성영-星影' },
        { src: require('@/assets/image/artwork/수사화.jpg'), alt: 'Drawing 29', title: '수사화 -水梭花' },
        { src: require('@/assets/image/artwork/신수도.jpg'), alt: 'Drawing 30', title: '신수도 神獸圖' },
        { src: require('@/assets/image/artwork/악몽.jpg'), alt: 'Drawing 31', title: '악몽 惡夢' },
        { src: require('@/assets/image/artwork/암야행.jpg'), alt: 'Drawing 32', title: '암야행 暗夜行' },
        { src: require('@/assets/image/artwork/여명.jpg'), alt: 'Drawing 33', title: '여명-黎明' },
        { src: require('@/assets/image/artwork/인내.jpg'), alt: 'Drawing 34', title: '인내 忍耐' },
        { src: require('@/assets/image/artwork/일소현명.jpg'), alt: 'Drawing 35', title: '일소현명 - 一所懸命' },
        { src: require('@/assets/image/artwork/진언.jpg'), alt: 'Drawing 36', title: '진언- 眞言' },
        { src: require('@/assets/image/artwork/타락천사.jpg'), alt: 'Drawing 37', title: '타락천사-墮落天使' },
      ],
    };
  },
  mounted() {
    // 약간의 지연을 추가하여 애니메이션이 제대로 작동하도록 함
    setTimeout(() => {
      this.isContentVisible = true;
    }, 100); // 100ms 지연
  },
  methods: {
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
};
</script>

<style scoped>
.drawing {
  /* padding: 20px; */
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh; /* Home.vue와 유사하게 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drawing h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: whitesmoke; /* 텍스트 색상 변경 */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.drawing h2.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.gallery.fade-in {
  opacity: 1;
}

.gallery-item {
  position: relative;
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .drawing h2 {
    font-size: 3em;
  }

  .overlay .text {
    font-size: 1.4em;
  }
}

/* 반응형 디자인: 모바일 */
@media (max-width: 767px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .drawing h2 {
    font-size: 2em;
  }

  .overlay .text {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .drawing h2 {
    font-size: 1.8em;
  }

  .overlay .text {
    font-size: 0.9em;
  }
}
</style>
