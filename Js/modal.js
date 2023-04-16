// selects
const albumImgsEl = document.querySelectorAll('.album-img');
const modalEl = document.querySelector('.modal');
const modalImgEl = document.querySelector('.modal-img');
const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const nameImgEl = document.querySelector('.name-img');
const numberImgEl = document.querySelector('.number-img');

// events
albumImgsEl.forEach((albumImgEl,index)=>{
    albumImgEl.addEventListener('click',(e)=>{
        e.stopPropagation();
        // show modal
        modalEl.classList.add('show-modal');
        // replace modal img
        modalImgEl.setAttribute('src' , albumImgEl.getAttribute('src'));

        nameImgEl.textContent = albumImgEl.title;

        numberImgEl.textContent = `${index + 1} / ${albumImgsEl.length}`;

        // next img
        nextEl.addEventListener('click',(e)=>{
            e.stopPropagation();
            index++;
            if(index > albumImgsEl.length - 1){
                index = 0;
            }
            change();
        });
        // prev img
        prevEl.addEventListener('click',(e)=>{
            e.stopPropagation();
            index--;
            if(index < 0){
                index = albumImgsEl.length - 1;
            }
            change();
        });
        const change = ()=>{
            modalImgEl.style.opacity='0';
            setTimeout(()=>{
                modalImgEl.style.opacity='1';
                // replace modal img
                modalImgEl.setAttribute('src' , albumImgsEl[index].getAttribute('src'));

                nameImgEl.textContent = albumImgsEl[index].title;

                numberImgEl.textContent = `${index + 1} / ${albumImgsEl.length}`;
            },250);
        };
    });
});
// hide modal
window.addEventListener('click',()=>{
    modalEl.classList.remove('show-modal');
});
// debug
modalImgEl.addEventListener('click',(e)=>{
    e.stopPropagation();
});
