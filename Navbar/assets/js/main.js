/* Expanded MENU */
const showMenu = (toogleId,navId) => {
    const toggle = document.getElementById(toogleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    }
}

showMenu('header-toggle','nav-menu');

/* Active and remove menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navLink.forEach(element => {
        element.classList.remove('active');
        this.classList.add('active');
    });
}
navLink.forEach(n => n.addEventListener('click',linkAction));

