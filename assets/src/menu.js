const subnav = document.querySelector('.inner-subnav');
const subnavList = document.querySelector('.subnav-list');
const subnavListHeight = `${subnavList.scrollHeight}px`;
const navList = document.querySelector('.nav-list');
const menuHamburger = document.querySelector('.menu-hamburger');

export function toggleNavigation(event) {
  const isNavigationClosed = !event.target.classList.contains('open');
  const navListHeight = `${navList.scrollHeight + subnavList.scrollHeight}px`;
  event.target.classList.toggle('open');
  if (isNavigationClosed) {
    navList.style.maxHeight = navListHeight;
  } else {
    subnav.classList.remove('open');
    navList.style.maxHeight = `0`;
    subnavList.style.maxHeight = `0`;
  }
}
export function toggleSubNavigation() {
  const isSubNavigationClosed = !subnav.classList.contains('open');
  if (isSubNavigationClosed) {
    subnav.classList.add('open');
    subnavList.style.maxHeight = subnavListHeight;
  } else {
    subnav.classList.remove('open');
    subnavList.style.maxHeight = `0`;
  }
}
export function toggleStickyMenu() {
  const logo = document.querySelector('header .logo>img');
  const header = document.querySelector('header');
  if (window.scrollY > header.scrollHeight) {
    header.classList.add('sticky-menu');
    logo.setAttribute('src', '/assets/img/logo-monetton-sticky.png');
  }
  if (window.scrollY > header.scrollHeight + 5) {
    header.classList.add('active');
  } else {
    header.classList.remove('sticky-menu');
    header.classList.remove('active');
    logo.setAttribute('src', '/assets/img/logo-monetton.png');
  }
}
export function resizeScreen(event) {
  // document.location.reload();
  const isNotMobileScreen = event.target.innerWidth >= 481;
  if (isNotMobileScreen) {
    navList.style.maxHeight = 'max-content';
  } else {
    navList.style.maxHeight = '0';
    menuHamburger.classList.remove('open');
  }
}
