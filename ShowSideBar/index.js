const sidebar = document.querySelector(".sidebar")
const closeMenu = document.querySelector("#close-menu")
const openMenu = document.querySelector("#open-menu")

openMenu.addEventListener('click', toglleMenu);
closeMenu.addEventListener('click', toglleMenu);


function toglleMenu(){
    sidebar.classList.toggle('show-side')
}