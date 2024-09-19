<!-- About.vue -->
<template>
  <div class="about">
    <div class="about-content">
      <div class="profile_image">
        <img src="@/assets/image/about/about_profile_img.jpeg" alt="Profile Image" />
      </div>
      <p>Nightmare, Idea, Mirage, Fable, fabrication Imaging, Visualization, Cloudkand, Shangrila, UTOpia.</p>
      <p>"A dream you dream alone is only a dream. A dream you dream together is reality."</p>
      <div class="logo_image">
        <img src="@/assets/logo.jpg" alt="Logo Image" />
      </div>
      <p>악몽, 생각, 망상, 우화, 위조, 발명, 공상, 몽상, 시각화, 공상, 낙원, 이상향</p>
      <p>혼자 꾸는 꿈은 꿈 함께 꾸는 꿈은 현실</p>
      <p>당신의 꿈을 제 꿈으로 재해석하길 바랍니다.
        그를 해몽하여 분석하며 감각적인 작업을 바랍니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 텍스트 콘텐츠 스타일 */
.about-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 프로필 이미지 컨테이너 */
.profile_image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.profile_image img {
  width: 400px;
  height: auto;
  object-fit: cover;
  /* 원형 테두리 제거 */
  /* border-radius: 50%; */ /* 제거 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 로고 이미지 컨테이너 */
.logo_image {
  /* width: 50%; */ /* 중앙 정렬을 위해 제거 */
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 중앙 정렬 추가 */
  margin-bottom: 30px;
}

.logo_image img {
  width: 200px;
  height: auto;
  object-fit: cover;
  /* 원형 테두리 제거 */
  /* border-radius: 50%; */ /* 제거 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 텍스트 스타일 */
.about-content p {
  font-size: 0.6em;
  color: whitesmoke;
  line-height: 1.6;
  max-width: 800px;
  margin: 10px 0; /* p 요소 간 간격 조정 */
}

/* 반응형 디자인: 태블릿 및 PC */
@media (min-width: 768px) {
  .about {
    text-align: center;
  }

  .profile_image {
    margin-bottom: 50px;
  }

  .logo_image {
    margin: 30px 0;
  }

  .about-content {
    text-align: center;
    align-items: center;
  }

  .about-content p {
    font-size: 0.8em;
  }

  .logo_image img {
    width: 250px; /* PC에서 로고 이미지 크기 조정 */
  }
}

/* 반응형 디자인: 모바일 */
@media (max-width: 767px) {
  .profile_image img {
    width: 150px;
  }

  .logo_image img {
    margin: 10px 0 0 0;
    width: 100px;
  }

  .about-content p {
    font-size: 0.7em;
  }
}
</style>
