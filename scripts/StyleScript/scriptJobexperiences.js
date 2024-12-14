
//sticky nav

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 50)
});

//menu list x

let menu = document.querySelector('#menu-icon').firstChild;
let navlist = document.querySelector('.navList');
let menuBoolean = false;

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x')
/*   if (!menuBoolean) {
    menu.innerHTML = `<i class='bx bx-x'></i>`;
    menuBoolean = true;
  } else {
    menu.innerHTML = `<i class='bx bx-menu'></i>`
    menuBoolean = false
  } */
  navlist.classList.toggle('open')
});

console.log(Array(menu))

window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x')
navlist.classList.remove('open')
});

