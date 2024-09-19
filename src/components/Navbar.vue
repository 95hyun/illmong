<!-- Navbar.vue -->
<template>
  <div class ="borderEmpty">
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">一夢</router-link>
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
            <li><router-link to="/tattoo/blackwork">BLACK WORK</router-link></li>
            <li><router-link to="/tattoo/blackandgrey">BLACK & GREY</router-link></li>
            <li><router-link to="/tattoo/color">COLOR</router-link></li>
            <li><router-link to="/tattoo/uv">UV</router-link></li>
            <li><router-link to="/tattoo/mini">MINI (LETTERING)</router-link></li>
          </ul>
        </li>
        <li><router-link to="/appointment">APPOINTMENT</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </div>
  </nav>
  </div>
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

.borderEmpty {
  margin: 10px;
}

.navbar {
  background-color: grey;
  width: 100%;
  padding: 10px 20px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
}

.logo a {
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  font-weight: bold;
}

.menu-icon {
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  cursor: pointer;
}

.menu-icon .line {
  width: 25px;
  height: 3px;
  background-color: black;
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
  /* Flex 아이템 사이에 공간을 주기 위해 margin 사용 */
  gap: 20px; /* 각 메뉴 아이템 사이에 간격 추가 */
}

.nav-list li {
  position: relative;
}

.nav-list li a,
.nav-list li span {
  text-decoration: none;
  color: black;
  cursor: pointer;
  display: block;
  padding: 15px 0; /* 세로 패딩 추가 */
}

/* 드롭다운 메뉴 스타일 */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: gray;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 150px;
  z-index: 1000; /* 드롭다운 메뉴가 다른 요소 위에 표시되도록 설정 */
}

.dropdown-menu li {
  padding: 10px 20px;
}

.dropdown-menu li a {
  color: black;
}

.nav-list > .dropdown:hover .dropdown-menu {
  display: block;
}

/* 모바일 스타일 */
@media (max-width: 768px) {
  .borderEmpty {
    margin : 0px
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
    background-color: #444;
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
    background-color: #444;
    width: 100%;
  }

  .nav-list > .dropdown .dropdown-menu.active {
    display: block;
  }

  .nav-list li a,
  .nav-list li span {
    color: black;
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
    padding: 0 30px; /* 좌우 패딩 추가 */
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
}
</style>