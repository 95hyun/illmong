<!-- Appointment.vue -->
<template>
  <div class="appointment">
    <div class="appointment-content">
      <h1>예약 / Booking</h1>
      <div class="appointment-card">
        <div class="appointment-info">
          <p>아래 내용을 복사 후 오픈 카카오 채팅방에 붙여넣고 내용들을 채워 1:1 문의 부탁드립니다.</p>
          <p>참고 이미지의 경우 제 작업물 중 가장 마음에 드셨던 것으로 2-3장의 사진을 첨부해주세요</p>
          <p>Please copy the contents below and paste them into the open Kakao chat room and fill them in for 1:1 inquiries</p>
          <p>For the reference image, please attach 2-3 photos of my work that you liked the most</p>
        </div>
      </div>
      <div class="appointment-card">
        <!-- 복사 버튼 추가 -->
        <button class="copy-btn" @click="copyContent" :title="copyButtonTitle">
          {{ copyButtonText }}
        </button>
        <!-- 복사할 내용만 포함하는 컨테이너 -->
        <div class="appointment-details" ref="appointmentDetails">
          <p>이름 / Name</p>
          <p>나이 / Age</p>
          <p>이메일 / E-mail address</p>
          <p>전화번호 / Phone number</p>
          <p>타투 소재 / Desired theme</p>
          <p>위치 및 대략적인 크기(cm) / Desired placement with size</p>
          <p>타투가능한 일정 / The date you want</p>
          <p>커버업,리터치 예약 (O, X)/ Booking for cover-up or touch up</p>
          <p>추가 요청사항 / Any request in detail</p>
          <p>참고 이미지 / Reference picture</p>
        </div>
      </div>
    </div>
    <!-- 문의 버튼 -->
    <a href="https://open.kakao.com/me/Onedreamtattoo" target="_blank" rel="noopener noreferrer">
      <button type="button" class="btn">1:1 문의 신청</button>
    </a>
    <p>1:1 문의 신청 버튼을 클릭하면 오픈 카카오톡으로 연결됩니다</p>
  </div>
</template>

<script>
export default {
  name: 'AppointmentPage',
  data() {
    return {
      copyButtonText: '복사하기', // 초기 버튼 텍스트
      copyButtonTitle: '예약 정보를 복사합니다',
      copyTimeout: null, // 타임아웃 핸들러
    };
  },
  methods: {
    copyContent() {
      // appointment-details의 텍스트를 가져옴
      const content = this.$refs.appointmentDetails.innerText;

      // 클립보드에 복사
      navigator.clipboard.writeText(content)
          .then(() => {
            // 복사 성공 시 버튼 텍스트 변경
            this.copyButtonText = '복사 완료!';
            this.copyButtonTitle = '예약 정보가 복사되었습니다.';

            // 기존 타임아웃이 있다면 초기화
            if (this.copyTimeout) {
              clearTimeout(this.copyTimeout);
            }

            // 2초 후 버튼 텍스트 원래대로 복원
            this.copyTimeout = setTimeout(() => {
              this.copyButtonText = '복사하기';
              this.copyButtonTitle = '예약 정보를 복사합니다';
              this.copyTimeout = null;
            }, 2000);
          })
          .catch((err) => {
            console.error('복사 실패:', err);
            alert('예약 정보 복사에 실패했습니다. 다시 시도해주세요.');
          });
    },
  },
  beforeUnmount() {
    // 컴포넌트가 파괴되기 전에 타임아웃 클리어
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
  },
};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.appointment {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #565656;
}

/* 텍스트 콘텐츠 스타일 */
.appointment-content {
  text-align: center;
  position: relative; /* 복사 버튼 위치를 위한 상대 위치 설정 */
}

.appointment-card {
  border: 1px dashed white;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  text-align: left;
  position: relative; /* 복사 버튼을 절대 위치로 배치하기 위해 상대 위치 설정 */
}

/* 복사 버튼 스타일 */
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  color: black;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.copy-btn:hover {
  background-color: #565656;
}

/* 텍스트 스타일 */
.appointment-content h1 {
  font-size: 2em;
  margin-bottom: 40px;
  color: ghostwhite;
  text-align: center;
}

.appointment-details p {
  text-align: left;
  font-size: 0.8em;
  color: ghostwhite;
  line-height: 1.6;
  margin: 10px 0; /* 각 p 요소에 간격 추가 */
}

.appointment-info p {
  text-align: center;
  font-size: 0.8em;
  color: ghostwhite;
  line-height: 1.6;
  margin: 10px 0; /* 각 p 요소에 간격 추가 */
}

/* 문의 버튼 스타일 */
.btn {
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1em;
}

.btn:hover {
  background-color: #ffffff;
}

/* 반응형 디자인: 태블릿 및 PC */
@media (min-width: 768px) {
  .appointment-content {
    text-align: left;
  }

  .appointment-content h1 {
    font-size: 2em;
  }

  .appointment-details p {
    font-size: 1em;
  }
}

/* 반응형 디자인: 모바일 */
@media (max-width: 767px) {

  .copy-btn {
    font-size: 0.8em;
    padding: 5px 8px;
  }

  .appointment-content h1 {
    font-size: 1.5em;
  }

  .appointment-details p {
    font-size: 1em;
  }
}
</style>
