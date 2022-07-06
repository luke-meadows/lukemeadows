export function disableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('.App').style.overflow = 'hidden';
  document.querySelector('.App').style.pointerEvents = 'none';
  window.scrollTo(0, scrollX);
}

export function enableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('.App').style.overflow = 'scroll';
  document.querySelector('.App').style.pointerEvents = 'all';
  window.scrollTo(0, scrollX);
}
