const menuList = document.getElementById('mobile-menu')

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