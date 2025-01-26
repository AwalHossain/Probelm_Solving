const openMenu = document.querySelector('.open-menu');

const sidebar = document.querySelector('.sidebar')

const closeMenu = document.querySelector('.close');


openMenu.addEventListener('click', toggelMenubar);
closeMenu.addEventListener('click', toggelMenubar);

function toggelMenubar(){
    sidebar.classList.toggle("open");
}