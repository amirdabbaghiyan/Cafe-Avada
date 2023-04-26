// select
const navLinksEl = document.querySelectorAll('.nav-link');
const tabListsEl = document.querySelectorAll('.tab-list');

// event
// tab list
for (const navLinkEl of navLinksEl) {
    for (const tabListEl of tabListsEl) {
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
    }
}