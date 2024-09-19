<!-- Drawing.vue -->
<template>
  <div class="drawing">
    <h2>DRAWING</h2>
    <div class="gallery">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt">
        <div class="overlay">
          <div class="text">{{ image.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawingPage',
  data() {
    return {
      images: [
        { src: require('@/assets/image/artwork/drawing1.jpeg'), alt: 'Drawing 1', title: 'Drawing 1' },
        { src: require('@/assets/image/artwork/drawing2.jpeg'), alt: 'Drawing 2', title: 'Drawing 2' },
        { src: require('@/assets/image/artwork/drawing3.jpeg'), alt: 'Drawing 3', title: 'Drawing 3' },
        { src: require('@/assets/image/artwork/drawing4.jpeg'), alt: 'Drawing 4', title: 'Drawing 4' },
        { src: require('@/assets/image/artwork/drawing5.jpeg'), alt: 'Drawing 5', title: 'Drawing 5' },
        { src: require('@/assets/image/artwork/drawing6.jpeg'), alt: 'Drawing 6', title: 'Drawing 6' },
        { src: require('@/assets/image/artwork/drawing7.jpeg'), alt: 'Drawing 7', title: 'Drawing 7' },
        { src: require('@/assets/image/artwork/drawing8.jpeg'), alt: 'Drawing 8', title: 'Drawing 8' },
        { src: require('@/assets/image/artwork/drawing9.jpeg'), alt: 'Drawing 9', title: 'Drawing 9' },
      ],
    };
  },
};
</script>

<style scoped>
.drawing {
  //padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.drawing h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #333;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
  }

  .drawing h2 {
    font-size: 1.8em;
  }

  .overlay .text {
    font-size: 0.9em;
  }
}
</style>
