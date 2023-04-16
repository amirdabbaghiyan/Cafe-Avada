// select
const navLinksEl = document.querySelectorAll('.nav-link');
const tabListsEl = document.querySelectorAll('.tab-list');
const columnImgEl = document.querySelector('.column-img');

// event
// tab list
navLinksEl.forEach((navLinkEl) => {
    tabListsEl.forEach((tabListEl)=>{
        tabListsEl[0].style.display = 'block';
        tabListsEl[0].style.opacity = '1';
        
        navLinkEl.addEventListener('click',()=>{
            if(navLinkEl.dataset.target === tabListEl.dataset.target){
                tabListEl.style.opacity = '0';
                setTimeout(() => {
                    tabListEl.style.opacity = '1';
                    tabListEl.style.display = 'block';
                }, 250);
            } else {
                tabListEl.style.opacity = '0';
                setTimeout(() => {
                    tabListEl.style.display = 'none';
                }, 250);
            }
        });
    });
});

// if (window.location.hash === '#london') {
//     columnImgEl.setAttribute('src','Images/pancake.jpg');
// }

// aEl.forEach((a)=>{
//     a.addEventListener('click',()=>{
//         window.location.href += '#london';
//         window.location.reload();
//         if (window.location.hash === '#london') {
//             columnImgEl.setAttribute('src','Images/pancake.jpg')
//         }
//     })
// })