// select
const titleEl = document.getElementById('title');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const collectionsEl = document.querySelectorAll('.collection');

// events
const changeItem = (hash , title , year , month , target)=>{
    if(window.location.hash.includes(hash)){
        titleEl.textContent += title;
        yearEl.textContent += year;
        yearEl.setAttribute("href" , yearEl.getAttribute("href") + "#2015");
        monthEl.textContent += month;
        for (const collection of collectionsEl) {
            collection.dataset.target === target ? collection.style.display = "flex" : false;
        }
    }
};
changeItem("february-2015","february 2015","2015","february","february");
changeItem("january-2015","january 2015","2015","january","january");