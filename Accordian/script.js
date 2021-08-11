const item = document.querySelectorAll('.item');
item.forEach(el => {
    el.addEventListener('click',(e)=>{
        el.classList.toggle("open");
    })
 });
