// selects
const bgEl = document.querySelector('.bg-attachment');

// events
let num = 0;
let scrollPrimary = window.scrollY;
window.addEventListener('scroll',()=>{
    const scrollSecondary = window.scrollY;
    if(bgEl.parentElement.getBoundingClientRect().top < window.innerHeight && bgEl.parentElement.getBoundingClientRect().bottom > 0){
        if(scrollPrimary <= scrollSecondary){
            num--;
            if(num < -209){
                num = -209;
            }
        }
        if(scrollPrimary >= scrollSecondary){
            num++;
            if(num >= 0){
                num = 0;
            }
        }
    }
    bgEl.style.transform=`translateY(${num}px)`;
    scrollPrimary = window.scrollY;
});