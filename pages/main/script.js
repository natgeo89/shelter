
const menu = document.querySelector('.nav-menu');
const header = document.querySelector('.header-container');
const burger = document.querySelector('.burger-menu__button');
const blackout = document.querySelector('.blackout');


burger.addEventListener('click', openMenu);

window.addEventListener('resize', () => {
    if (document.body.offsetWidth > 767) { closeMenu(); }
});

blackout.addEventListener('click', closeMenu);

// window.addEventListener('click', (event)=>{
//     console.log(event.target)
// })

function openMenu(){

    menu.classList.toggle('opened');
    burger.classList.toggle('opened');
    header.classList.toggle('opened');
    document.body.classList.toggle('scroll-off');
    blackout.classList.toggle('opened');


}

function closeMenu(){

    menu.classList.remove('opened');
    burger.classList.remove('opened');
    header.classList.remove('opened');
    document.body.classList.remove('scroll-off');
    blackout.classList.remove('opened');

}