window.addEventListener('scroll', () => {
  document.getElementById("header__nav").classList.toggle('header__nav-scroll', window.scrollY > 154)
})