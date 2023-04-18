// selects
const imgsEl = document.querySelectorAll('.article-img');

// events
for (const imgEl of imgsEl) {
    imgEl.style.transform='scale(0.5)';
    imgEl.style.opacity='0';
    window.addEventListener('scroll',()=>{
        if(imgEl.getBoundingClientRect().top < window.innerHeight){
            imgEl.style.transition='2s';
            imgEl.style.transform='scale(1)';
            imgEl.style.opacity='1';
        };
    });
};