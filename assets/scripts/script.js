const nav = document.querySelectorAll('.main-nav li');

for (const navBtn of nav) {
    navBtn.addEventListener('click', stepHandler);
}

function stepHandler(e) {
    currentClassHandler(e);
}

function currentClassHandler(e) {
    const target = e.target.parentElement;

    nav.forEach(el => el.classList = "");
    target.classList.toggle('current')
}