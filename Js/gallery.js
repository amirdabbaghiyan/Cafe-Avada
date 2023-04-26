// selects
const galleryImgsEl = document.querySelectorAll('.gallery-img');

// events
for (const galleryImgEl of galleryImgsEl) {
    galleryImgEl.style.transition='0s';
    galleryImgEl.style.left='-100%';
    window.addEventListener('scroll',()=>{
        if(galleryImgEl.getBoundingClientRect().top <= window.innerHeight){
            galleryImgEl.style.transition='left 0.5s ease-in , transform 0.8s ease';
            galleryImgsEl[1].style.transitionDelay='0.5s';
            galleryImgsEl[2].style.transitionDelay='1s';
            galleryImgsEl[3].style.transitionDelay='1.5s';
            galleryImgEl.style.left='0';

            // debug
            setTimeout(()=>{
                galleryImgEl.style.transitionDelay='0s';
            },1500);
            // responsive
            if(window.innerWidth <= 425){
                galleryImgEl.style.transitionDelay='0s';
            }
        }
    });
}