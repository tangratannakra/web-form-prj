const nav = document.querySelectorAll('.main-nav li');

for (const navBtn of nav) {
    navBtn.addEventListener('click', stepHandler);
}

function stepHandler(e) {
    currentClassHandler(e);
    switchPageHandler(e);
}

function currentClassHandler(e) {
    const target = e.target.parentElement;

    nav.forEach(el => el.classList = "");
    target.classList.toggle('current')
}

function switchPageHandler(e){
    const clickedId = e.target.id;
    const allSections = document.querySelectorAll('.form-section');
    
    allSections.forEach(section => {
        const sectionId = section.id;
    
        if(sectionId !== clickedId){
            section.classList.add('hide');
        }else {
            section.classList.remove('hide');
        }
    });

}