const hamburguerIcon = document.querySelector('.hamburguer')
const mobileMenu = document.querySelector('.menu-mobile .links')
const closeMenu = document.querySelector('.close')
const openMenu = document.querySelector('.open')

hamburguerIcon.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('menu-opened')
    closeMenu.classList.toggle('show-close-btn')
    openMenu.classList.toggle('show-open-btn')
})

console.log('teste')