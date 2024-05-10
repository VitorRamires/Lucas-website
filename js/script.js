const hamburguerIcon = document.querySelector('.hamburguer')
const mobileMenu = document.querySelector('.menu-mobile .links')
const closeMenu = document.querySelector('.close')
const openMenu = document.querySelector('.open')
const linksMenuMobile = document.querySelectorAll('.links ul li')

hamburguerIcon.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('menu-opened')
    closeMenu.classList.toggle('show-close-btn')
    openMenu.classList.toggle('show-open-btn')
    linksMenuMobile.forEach(link => {
        link.addEventListener('click', ()=>{
            mobileMenu.classList.remove('menu-opened')
        })
    });
})

console.log('teste')