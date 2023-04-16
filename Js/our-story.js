// selects
const menuPostEl = document.querySelector('.menu-post');
const menuHideEl = document.querySelector('.menu-hide');
const pack01 = document.getElementById('pack-01');
const btnEl = document.getElementById('btn-01');
const moreEl = document.getElementById('more');
const accordionEl = document.querySelector('.accordion');
const loaderEl = document.querySelector('.server-loader');

// events
// hide pack01
const height = pack01.offsetHeight;
btnEl.addEventListener('click',()=>{
    pack01.style.height = `${height}px`;
    setTimeout(() => {
        pack01.classList.toggle('hide');
    }, 10);
});

// get
const postItemsUrl = 'http://localhost:3000/post-items';
const getPostItems = async ()=>{
    moreEl.innerHTML = loaderEl.innerHTML;
    try {
        const response = await fetch(postItemsUrl);
        const postItems = await response.json();
        
        moreEl.style.display = 'none';

        let template = '';
    
        for (const postItem of postItems) {
            const {src , title , content , target} = postItem;
            template += 
                `<div class="parent-item">
                    <article class="post-item">
                        <div class="post-img">
                            <img src="${src}" alt="">
    
                            <div class="shadow-img">
                                <a href="${target}" class="bg-icon">
                                    <i class="icon-link"></i>
                                </a>
                                <a href="${target}" class="bg-icon">
                                    <i class="icon-search"></i>
                                </a>
                                <a href="${target}" class="cover"></a>
                            </div>
                        </div>
    
                        <div class="post-content">
                            <h3 class="medium-title line">
                                <a href="${target}" class="text-link">${title}</a>
                            </h3>
    
                            <p class="text-primary">${content}</p>
    
                            <div class="post-comment">
                                <a href="${target}" class="text-link">read more
                                    <i class="icon-chevron-right"></i>
                                </a>
    
                                <a href="${target}" class="text-link">
                                    <i class="icon-bubbles"></i>
                                    <span>0</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>`
        };
        // create pack02 
        const pack02 = document.createElement('div');
        pack02.classList.add('menu-hide');
        pack02.innerHTML = template;
    
        // create btn02
        const btn02El = document.createElement('button');
        btn02El.classList.add('accordion-btn');
        btn02El.id = 'btn-02';
        btn02El.textContent = 'january 2015';
        pack02.appendChild(btn02El);
    
        // show pack02 
        pack02.style.transitionDuration='0.5s'
        pack02.style.opacity='0';
        setTimeout(()=>{
            pack02.style.opacity='1';
        },1);
        menuPostEl.appendChild(pack02);
    
        // hide pack01
        pack02.style.height = `${pack02.offsetHeight}px`;
        menuPostEl.addEventListener('click',(e)=>{
            if(e.target.id==='btn-02'){
                pack02.classList.toggle('hide');
                if(pack02.classList.contains('hide')){
                    accordionEl.style.height = `calc(100% - 215px)`;
                } else{
                    accordionEl.style.height = `calc(100% - 160px)`;
                }
            }
        });
    } catch (e){
        moreEl.textContent= 'error';
    }
};

moreEl.addEventListener('click',(e)=>{
    getPostItems();
});
