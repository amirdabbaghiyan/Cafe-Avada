// selects
const parallaxEl = document.querySelector('.parallax');
const numsEl = document.querySelectorAll('.parallax-num');

// events
numsEl.forEach((numEl)=>{
    numEl.textContent = '0';

    const contour =(max , numPlus , index)=>{
        let number = 0;

        setInterval(()=>{
            if(number < max){
                number += numPlus;
            }
            if(number > max){
                number = max;
            }
            numsEl[index].textContent = number;
        },1);
    };

    window.addEventListener('scroll',()=>{
        if(numEl.textContent === '0' && numEl.getBoundingClientRect().bottom < window.innerHeight){
            contour(105623,165,0);
            contour(10348,16,1);
            contour(16923,26,2);
            contour(23732,37,3);
        }
    });
});