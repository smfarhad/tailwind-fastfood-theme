const humberger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
humberger.addEventListener("click",()=>{
    navMenu.classList.remove('hidden');
})
navClose.addEventListener("click",()=>{
    navMenu.classList.add('hidden');
})