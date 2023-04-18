// select
const titleEl = document.getElementById('title');
const yearEl = document.getElementById('year');
const collectionsEl = document.querySelectorAll('.collection');

// events
const changeItem = (hash , title , year , target)=>{
    if(window.location.hash.includes(hash)){
        titleEl.textContent += title;
        yearEl.textContent += year;
        for (const collection of collectionsEl) {
            collection.dataset.target === target ? collection.style.display = "flex" : false;
        }
    }
};
changeItem("2015","2015","2015","2015");