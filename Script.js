let menu_logo = document.querySelector('.mb-bar');
let menu_bar = document.querySelector('.nav-items');
menu_logo.addEventListener('click',()=>{
    menu_bar.classList.toggle('showMenu')
});
document.body.scrollIntoView({behavior:'smooth'});