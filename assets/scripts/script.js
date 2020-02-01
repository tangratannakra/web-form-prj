const nav = document.querySelectorAll('.main-nav li');
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', function(e){  
    e.preventDefault();
    secondPageValidationHandler();
});

nextBtn.addEventListener('click', function(e){
    const validation = firstPageValidationHandler();
    if (validation){
        nextHandler();
    }    
});

// for (const navBtn of nav) {
//     navBtn.addEventListener('click', stepHandler);
// }

// function stepHandler(e) {
//     const validation = formValidationHandler();
//     if (validation){
//         currentClassHandler(e);
//         switchPageHandler(e);
//     } 
    
// }

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

function firstPageValidationHandler(){
    const inputFields = document.querySelectorAll('#first-page .required');
    let validationState = true;

    inputFields.forEach(input => {
        input.value.trim();
        if (input.type == 'text'){
            
            if (input.value == ""){
                input.placeholder = 'Please fill the required field';
                input.classList.add('invalid');
                validationState = false;
            }
        
        }

        if (input.type == 'email'){
            const regEx = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            	if (!regEx.test(input.value)){
                input.classList.add('invalid');
                validationState = false;
            }
        }
    });

    return validationState;
}

function secondPageValidationHandler(){
    const inputFields = document.querySelectorAll('#second-page .required');
    //let validationState = true;

    inputFields.forEach(input => {
        input.value.trim();
        if (input.type == 'checkbox'){
            if (!input.checked){
                input.classList.add('invalid');
                validationState = false;
            }
        }
    });
    
    document.form.submit();
}