// selects
// site loader
const bodyEl = document.querySelector('body');
const siteLoaderEl = document.querySelector('.site-loader');
// menu slide
const headerEl = document.querySelector('#header');
const heroEl = document.querySelector(".hero");
// menu hamburger
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const menuHamburgerIconEl = document.querySelector('.icon-menu'); 
const menuEl = document.querySelector('.menu');
// hero content
const heroContentsEl = document.querySelectorAll('.hero :nth-child(n)');
// scroll up
const scrollUpEl = document.querySelector('.scroll-up');

// events
// site loader
document.onreadystatechange = ()=>{
    if (document.readyState !== "complete") {
        bodyEl.style.visibility = "hidden";
        siteLoaderEl.style.visibility = "visible";
    } else {
        siteLoaderEl.style.opacity = "0";
        siteLoaderEl.style.visibility = "hidden";
        bodyEl.style.visibility = "visible";

        // hero content
        for (const heroContentEl of heroContentsEl) {
            if (document.readyState == "complete") {
                heroContentEl.style.display = 'initial';
            }
        }
    }
};

// menu slide
// menu row
const menuRow = ()=>{
let scrollPrimary = window.scrollY;
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= heroEl.offsetHeight - headerEl.offsetHeight){
            const scrollSecondary = window.scrollY;
            
            // scroll to down
            if(scrollPrimary <= scrollSecondary){
                headerEl.classList.remove('slid-down');
                headerEl.classList.add('slid-up');
            }
            
            // scroll to up
            if(scrollPrimary >= scrollSecondary){
                headerEl.classList.remove('slid-up');
                headerEl.classList.add('slid-down');
            }
        }

        scrollPrimary = window.scrollY;
    });
};
// menu column
const menuColumn = ()=>{
    window.addEventListener('scroll',()=>{
        let num = window.scrollY;
        
        const maxScroll = headerEl.offsetHeight - window.innerHeight;

        if(num >= maxScroll){
            num = maxScroll;
        }

        headerEl.style.top=`-${num}px`;
    });
};
// by responsive
if (window.innerWidth <= 1024) {
    menuRow();
}
if(window.innerWidth >= 1024){
    menuColumn();
}
// by resize
window.addEventListener('resize',()=>{
    if (window.innerWidth <= 1024) {
        menuRow();
        headerEl.classList.remove('off-slide');
    }
    if(window.innerWidth >= 1024){
        menuColumn();
        headerEl.classList.add('off-slide');
    }
});

// scroll up
scrollUpEl.style.visibility="hidden";
scrollUpEl.style.opacity='0';
scrollUpEl.style.transition='0s';
window.addEventListener("scroll",()=>{
    if(window.scrollY >= heroEl.offsetHeight){
        scrollUpEl.style.visibility="visible";
        scrollUpEl.style.opacity='1';
        scrollUpEl.style.transition='0.5s';
    } else{
        scrollUpEl.style.visibility="hidden";
        scrollUpEl.style.opacity='0';
    }
});

// menu hamburger
// menu show
menuHamburgerEl.addEventListener("click",(e)=>{
    e.stopPropagation();
    menuEl.classList.toggle('show-menu');
    menuHamburgerIconEl.classList.toggle('icon-close');
});
// menu hide
window.addEventListener("click",()=>{
    menuEl.classList.remove('show-menu');
    menuHamburgerIconEl.classList.remove('icon-close');
});
// debag
window.addEventListener('resize',()=>{
    if(window.innerWidth <= 1024){
        menuEl.style.display='none';
        setTimeout(()=>{
            menuEl.style.display='block';
        },0);
        menuEl.classList.remove('show-menu');
    }
});