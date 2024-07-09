function fixDivOnScroll() {
    const div = document.getElementById('menu-main');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > viewportHeight) {
        div.style.position = 'fixed';
        div.style.top = '0px';
        div.style.left = '0px';
    } else {
        div.style.position = 'relative';
    }
}

window.addEventListener('scroll', fixDivOnScroll);