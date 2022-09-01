const menu  = document.querySelector('#mobile_menu');
const menuLinks= document.querySelector('.navbar_menu');
const navlogo=document.querySelector('#navbar_logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');

}

 menu.addEventListener('click',mobileMenu);
//
// const highlightMenu = () =>{
//   const element = document.querySelector('.highlight')
//   const home = document.querySelector('#home-page')
//   const about = document.querySelector('#about-page')
//   const servicemenu = document.querySelector('#services-page')
//   let scrollPos= window.scrollY

  //add 'highlight' class to my menu items

//   if(window.innerwidth>960 && scrollPos<600) {
//     home.classList.add('highlight')
//     about.classList.remove('highlight')
//     return
//   } else if(window.innerwidth>960 && scrollPos<1400){
//   about.classList.add('highlight')
//   home.classList.remove('highlight')
//   servicemenu.classList.remove('highlight')
//   return
// }else if(window.innerwidth>960 && scrollPos<2345){
// servicemenu.classList.add('highlight')
// about.classList.remove('highlight')
// return
// }
//
//   if(element &&window.innerwidth <960 && scrollPos<600)|| element) {
//     element.classList.remove('highlight')
//   }
// }
// window.addEventListener('scroll',highlightMenu);
// window.addEventListener('click',highlightMenu);
