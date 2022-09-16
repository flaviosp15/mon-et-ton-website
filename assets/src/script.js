import { toggleNavigation, toggleSubNavigation, toggleStickyMenu, resizeScreen } from './menu.js';

const menuHamburger = document.querySelector('.menu-hamburger');
const subnav = document.querySelector('.inner-subnav');
const subnavLinks = document.querySelectorAll('.subnav-link');

/* ======== TOGGLE SUBNAVIGATION - HOVER EFFECT ======== */
if (window.innerWidth >= 1024) {
  subnav.addEventListener('mouseover', toggleSubNavigation, false);
  subnav.addEventListener('mouseout', toggleSubNavigation, false);
  subnavLinks.forEach(link => {
    link.addEventListener('mouseover', toggleSubNavigation, false);
    link.addEventListener('mouseout', toggleSubNavigation, false);
  });
  window.addEventListener('scroll', toggleStickyMenu);
}

/* ======== TOGGLE SUBNAVIGATION - CLICK ======== */
if (window.innerWidth < 1024) {
  subnav.addEventListener('click', toggleSubNavigation);
}

/* ======== TOGGLE NAVIGATION - CLICK ======== */
menuHamburger.addEventListener('click', toggleNavigation);

/* ======== FIX MAX-HEIGHT FROM HEADER WHEN RESIZE WINDOW  ======== */
window.addEventListener('resize', resizeScreen);
