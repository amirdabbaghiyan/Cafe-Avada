// selects
const formEl = document.querySelector('form');
const formItemsEl = document.querySelectorAll('.form-item');
const formBtnEl = document.querySelector('[type="submit"]');
const inputDateEl = document.querySelector('input[type="date"]');

// events
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();

    formBtnEl.innerHTML='<div class="loader"></div>';
    setTimeout(()=>{
        formBtnEl.innerHTML="send";
    },800);
});

// form checkvalid
for (const formItem of formItemsEl) {
    formItem.addEventListener('keyup',()=>{
        if(formItem.checkValidity() === false ){
            formItem.style.borderColor = "red";
        } else{
            formItem.style.borderColor = "#5d646b";
        }
    });

    formBtnEl.addEventListener('click',()=>{
        if(formItem.checkValidity() === false ){
            formItem.style.borderColor = "red";
        } else{
            formItem.style.borderColor = "#5d646b";
        }
    });
}

// date value dynamic
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

day < 10 ? day = '0' + day : false;
month < 10 ? month = '0' + month : false;

inputDateEl.value = `${year}-${month}-${day}`;