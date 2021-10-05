const dropdown = document.querySelector('.dropdown .drop-down-btn');
const dropdownContent = document.querySelector('.dropdown .options');

dropdown.addEventListener('click',()=>{
    dropdownContent.classList.toggle('hide-it');
});