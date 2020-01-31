const nav = document.querySelectorAll('.main-nav li');
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', function(e){  
    e.preventDefault();
    formValidationHandler();
});
nextBtn.addEventListener('click', nextHandler);

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

function nextHandler(){
    nav.forEach(navEl => {
            navEl.firstChild.id=='second-page'?navEl.classList='current':navEl.classList="";
    })

    const allSections = document.querySelectorAll('.form-section');
    
    allSections.forEach(section => {
        section.id == 'second-page'? section.classList.remove('hide'): section.classList.add('hide');
    });
}

function formValidationHandler(){
    //e.preventDefault();
    const inputFields = document.querySelectorAll('input.required');

    inputFields.forEach(input => {
        input.value.trim();
        if (input.type == 'text'){
            if (input.value == ""){
                input.placeholder = 'Please fill the required field';
                input.classList.add('invalid');
            }
        }

        if (input.type == 'checkbox'){
            if (!input.checked){
                input.classList.add('invalid');
                return false;
            }
        }

        if (input.type == 'email'){
            const regEx = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
            if (!regEx.test(input.value)){
                input.classList.add('invalid');
            }
        }
        
        if (input.type =='tel'){
            const regEx = new RegExp('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/');
            if (!regEx.test(input.value)){
                input.classList.add('invalid')
            }
        }
    });
    return true;
}