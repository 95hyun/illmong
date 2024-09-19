<!-- Contact.vue -->
<template>
  <div class="contact">
    <div class="content">
      <!-- 이미지 섹션 -->
      <div class="image" :class="{ 'fade-in': isImageVisible }">
        <picture>
          <!-- 모바일 화면용 이미지 -->
          <source
              media="(max-width: 767px)"
              :srcset="require('@/assets/image/contact/contact_img.jpg')"
          />
          <!-- 기본 PC 화면용 이미지 -->
          <img
              :src="require('@/assets/image/contact/contact_img.jpg')"
              alt="Contact 배너"
              loading="lazy"
          />
        </picture>
      </div>

      <!-- 텍스트 및 정보 섹션 -->
      <div class="info" :class="{ 'fade-in': isTextVisible }">
        <!-- SNS 섹션 -->
        <div class="sns">
          <h2>SNS</h2>
          <div class="sns-links">
            <a href="https://www.instagram.com/ill_mong_tattooart" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/image/contact/insta_logo.png" alt="Instagram Logo" />
              <span>ill_mong_tattooart</span>
            </a>
            <a href="https://www.tiktok.com/@illmongtattoo?_t=8pqgxNoruOD&_r=1" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/image/contact/tictok_logo.png" alt="TikTok Logo" />
              <span>illmongtattoo</span>
            </a>
            <a href="https://youtube.com/@illmongtattoo?si=n2rCS5yo1jY4U-sE" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/image/contact/youtube_logo.png" alt="YouTube Logo" />
              <span>일몽의간지학개론</span>
            </a>
          </div>
        </div>

        <!-- Contact 섹션 -->
        <div class="contact-info">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:iLLmongtattoo@gmail.com">iLLmongtattoo@gmail.com</a></p>
        </div>

        <!-- Location 섹션 -->
        <div class="location">
          <h2>Location</h2>
          <p>Hongdae, Hapjeong, Seoul, Korea</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      isTextVisible: false,
      isImageVisible: false, // 이미지의 페이드 인 제어
    };
  },
  mounted() {
    // 약간의 지연을 추가하여 애니메이션이 제대로 작동하도록 함
    setTimeout(() => {
      this.isImageVisible = true;
    }, 100); // 100ms 지연

    setTimeout(() => {
      this.isTextVisible = true;
    }, 300); // 300ms 지연
  },
};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.contact {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* 콘텐츠 컨테이너 */
.content {
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  align-items: center;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

/* 이미지 컨테이너 */
.image {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
  margin-bottom: 40px;
}

.image.fade-in {
  opacity: 1;
}

.image picture img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  /* 불필요한 margin-bottom 제거 */
}

/* 정보 컨테이너 */
.info {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column; /* 모바일: 세로 배치 */
  align-items: center;
  text-align: center;
}

.info.fade-in {
  opacity: 1;
}

/* SNS 섹션 */
.sns {
  margin-bottom: 40px;
}

.sns h2 {
  font-size: 2em;
  color: #fff;
  margin-bottom: 20px;
}

.sns-links {
  display: flex;
  flex-direction: column;
  align-items: left; /* 중앙 정렬 */
}

.sns-links a {
  display: flex;
  align-items: center; /* 로고와 텍스트를 세로 중앙 정렬 */
  margin: 10px 0;
  text-decoration: none;
  color: #fff;
  transition: transform 0.3s ease;
}

.sns-links a:hover {
  transform: scale(1.05);
}

.sns-links img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.sns-links span {
  font-size: 1.2em;
}

/* Contact 섹션 */
.contact-info {
  margin-bottom: 40px;
}

.contact-info h2 {
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
}

.contact-info p {
  font-size: 1.2em;
  color: #ddd;
}

.contact-info a {
  color: #1e90ff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Location 섹션 */
.location h2 {
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
}

.location p {
  font-size: 1.2em;
  color: #ddd;
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
  .content {
    flex-direction: column; /* PC: 이미지 위에 정보 섹션 */
    align-items: center;
    text-align: left;
  }

  .image {
    flex: 1;
    margin-bottom: 40px;
    margin-right: 0;
    width: 40%;
    height: auto;
  }

  .info {
    flex: 1;
    flex-direction: row; /* PC: 정보 섹션을 가로로 배치 */
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }

  .sns,
  .contact-info,
  .location {
    margin-bottom: 0;
    flex: 1;
  }

  .sns-links {
    flex-direction: column;
    justify-content: flex-start;
  }

  .sns-links a {
    margin: 0 15px 0 0;
  }

  .sns-links img {
    width: 50px;
    height: 50px;
    margin-right: 10px; /* 텍스트와 로고 간격 조정 */
  }

  .sns-links span {
    font-size: 1em;
  }

  .contact-info p,
  .location p {
    font-size: 1.2em;
  }
}

/* 반응형 디자인: 모바일 */
@media (max-width: 767px) {
  .image {
    max-width: 90%; /* 모바일에서 이미지 크기 조정 */
  }

  .sns-links a {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .image {
    max-width: 100%; /* 모바일에서 이미지 크기 조정 */
  }

  .sns-links a span {
    font-size: 1em;
  }

  .sns-links img {
    width: 30px;
    height: 30px;
  }

  .contact-info p,
  .location p {
    font-size: 1em;
  }
}
</style>
