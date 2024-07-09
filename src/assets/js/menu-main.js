function fixDivOnScroll() {
    const div = document.getElementById('menu-main');
    const divTop = div.offsetTop;
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= divTop) {
        div.style.position = 'fixed';
        div.style.top = '0px';
    } else {
        div.style.position = 'relative';
    }
}

window.addEventListener('scroll', fixDivOnScroll);