const menuList = document.getElementById('mobile-menu')
const menuListLinks = document.getElementsByClassName('mobile-nav-link')
const menuListLinksArray = Array.from(menuListLinks)
const nav = document.getElementById('nav')

const menuToggle = () => {
    console.log('menuList: ', menuList)
    if (menuList.classList.contains('hide-xs')) {
        menuList.classList.remove('hide-xs');
        menuList.classList.add('block-xs');
        return;
    }
    if (menuList.classList.contains('block-xs')) {
        menuList.classList.remove('block-xs');
        menuList.classList.add('hide-xs')
        return;
    }
}

window.addEventListener('resize', () => {
    if (menuList.classList.contains('block-xs')) {
        menuList.classList.remove('block-xs');
        menuList.classList.add('hide-xs')
        return;
    }
})

menuListLinksArray.map((link, index, array) => {
    link.addEventListener('click', () => {
        if (menuList.classList.contains('block-xs')) {
            menuList.classList.remove('block-xs');
            menuList.classList.add('hide-xs')
            return;
        }
    })
})

window.addEventListener('scroll', () => {
    if (window.scrollY != 0) {
        if (nav.classList.contains('opacity0')) {
            nav.classList.remove('opacity0')
            nav.classList.add('bgcolor1')
        }
    } else {
        if (nav.classList.contains('bgcolor1')) {
            nav.classList.remove('bgcolor1')
            nav.classList.add('opacity0')
        }
    }
})