<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.jpg" alt="Logo" class="logo-image" />
<!--          <span class="logo-text">一夢</span>-->
        </router-link>
      </div>
      <div class="menu-icon" @click="toggleMenu" aria-label="Toggle navigation menu" role="button" tabindex="0">
        <div :class="['line', { 'active': isMenuOpen }]"></div>
        <div :class="['line', { 'active': isMenuOpen }]"></div>
        <div :class="['line', { 'active': isMenuOpen }]"></div>
      </div>
      <ul :class="['nav-list', { 'active': isMenuOpen }]">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li class="dropdown">
          <span @click="toggleSubMenu('artwork')">ARTWORK</span>
          <ul :class="['dropdown-menu', { 'active': activeSubMenu === 'artwork' }]">
            <li><router-link to="/artwork/drawing">DRAWING</router-link></li>
            <li><router-link to="/artwork/made">MADE</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <span @click="toggleSubMenu('tattoo')">TATTOO</span>
          <ul :class="['dropdown-menu', { 'active': activeSubMenu === 'tattoo' }]">
            <li><router-link to="/tattoo/illust">ILLUST</router-link></li>
            <li><router-link to="/tattoo/blackwork">BLACK WORK</router-link></li>
            <li><router-link to="/tattoo/blackandgrey">BLACK & GREY</router-link></li>
            <li><router-link to="/tattoo/uv">UV</router-link></li>
            <li><router-link to="/tattoo/mini">MINI (LETTERING)</router-link></li>
          </ul>
        </li>
        <li><router-link to="/appointment">APPOINTMENT</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      isMenuOpen: false,
      activeSubMenu: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // 메뉴가 닫힐 때 서브메뉴도 닫기
      if (!this.isMenuOpen) {
        this.activeSubMenu = null;
      }
    },
    toggleSubMenu(menu) {
      if (this.activeSubMenu === menu) {
        this.activeSubMenu = null;
      } else {
        this.activeSubMenu = menu;
      }
    },
  },
};
</script>

<style scoped>
/* CSS Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Prevent horizontal overflow */
body {
  overflow-x: hidden;
}

.navbar {
  background-color: black;
  width: 100%;
  padding: 10px 20px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 0 30px; /* 내부 패딩 추가 */
  background-color: black;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1.5em;
  font-weight: bold;
}

.logo-image {
  width: 40px; /* 원하는 크기로 조정 */
  height: 40px;
  object-fit: contain;
  margin-right: 10px; /* 텍스트와 이미지 사이 간격 */
}

.logo-text {
  display: inline-block;
}

.menu-icon {
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  cursor: pointer;
}

.menu-icon .line {
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.menu-icon .line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon .line.active:nth-child(2) {
  opacity: 0;
}

.menu-icon .line.active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 20px; /* 각 메뉴 아이템 사이에 간격 추가 */
  padding: 0; /* 패딩 초기화 */
}

.nav-list li {
  position: relative;
}

.nav-list li a,
.nav-list li span {
  text-decoration: none;
  color: whitesmoke;
  cursor: pointer;
  display: block;
  padding: 15px 0; /* 세로 패딩 추가 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
}

/* 드롭다운 메뉴 스타일 */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #212121; /* 배경색을 더 진하게 설정 */
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 150px;
  z-index: 1000; /* 드롭다운 메뉴가 다른 요소 위에 표시되도록 설정 */
  border-radius: 4px; /* 약간의 둥근 모서리 */
}

.dropdown-menu li {
  padding: 10px 20px;
}

.dropdown-menu li a {
  color: white; /* 텍스트 색상을 흰색으로 변경 */
}

.dropdown-menu li a:hover {
  background-color: #1e1e1e; /* 호버 시 더 진한 배경색 */
}

.nav-list > .dropdown:hover .dropdown-menu {
  display: block;
}

/* 모바일 스타일 */
@media (max-width: 768px) {
  .navbar {
    background-color: #000000;
    width: 100%;
    padding: 10px 20px;
  }

  .nav-container {
    padding: 0 10px; /* 좌우 패딩 조정 */
  }

  .menu-icon {
    display: flex;
  }

  .nav-list {
    position: fixed;
    top: 60px; /* 네비게이션 바 높이에 맞게 조정 */
    left: -100%;
    width: 100%;
    height: calc(100% - 60px);
    background-color: #0e0e0e;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    transition: left 0.3s ease-in-out;
    padding-top: 20px;
    z-index: 1000; /* 다른 요소보다 위에 표시 */
    gap: 0; /* 모바일에서는 gap 제거 */
  }

  .nav-list.active {
    left: 0;
  }

  .nav-list li {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }

  .nav-list > .dropdown .dropdown-menu {
    position: static;
    display: none;
    background-color: #666; /* 모바일용 배경색 조정 */
    width: 100%;
    border-radius: 0;
  }

  .nav-list > .dropdown .dropdown-menu.active {
    display: block;
  }

  .nav-list li a,
  .nav-list li span {
    color: white; /* 텍스트 색상을 흰색으로 변경 */
    width: 100%;
    display: block;
  }

  /* 드롭다운 메뉴 토글 */
  .dropdown > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }

  .dropdown .dropdown-menu li {
    padding: 10px 0;
  }

  /* Prevent horizontal overflow */
  body {
    overflow-x: hidden;
  }

  /* 마진 대신 패딩과 gap 사용 */
  .nav-list {
    padding: 0 20px; /* 좌우 패딩 추가 */
  }

  .nav-list li {
    /* margin 제거 */
    padding: 15px 0;
  }

  .nav-list li a,
  .nav-list li span {
    padding: 10px 0; /* 패딩 조정 */
  }

  /* 메뉴 아이콘 애니메이션 */
  .menu-icon .line.active:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-icon .line.active:nth-child(2) {
    opacity: 0;
  }

  .menu-icon .line.active:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* 호버 상태를 모바일에서도 쉽게 인식할 수 있도록 터치 기반 효과 추가 */
  .nav-list > .dropdown > span:active,
  .nav-list > .dropdown > span:focus {
    background-color: #333; /* 터치 또는 포커스 시 배경색 변경 */
    border-radius: 4px;
  }
}

/* 태블릿 및 PC 스타일 개선 */
@media (min-width: 769px) {
  .logo a {
    display: flex;
    align-items: center;
  }

  .logo-image {
    width: 50px; /* 원하는 크기로 조정 */
    height: 50px;
    object-fit: contain;
    margin-right: 15px; /* 텍스트와 이미지 사이 간격 */
  }

  .logo-text {
    font-size: 1em; /* 텍스트 크기 조정 */
  }
}
</style>
