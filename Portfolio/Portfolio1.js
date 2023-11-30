const header = document.querySelector("header");

// navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// section.active
let section = document.querySelectorAll('section')
let navliks = document.querySelectorAll('ul li a')

// dark mode / light mode
let darkmode = document.querySelector('#darkmode');

// header
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// navbar
menu.onclick = () => {
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};


// section.active
window.addEventListener('scroll',()=>{
    let current = ''
    let scrollTop=window.scrollY
    section.forEach(
        section=>{
            let sectionTop= section.offsetTop
            if(scrollTop>=sectionTop-110){
                current=section.getAttribute('id')
            }
        }
    )
    navliks.forEach(
        li=>{
            li.classList.remove('active')
            if(li.classList.contains(current)){
                li.classList.add('active')
            }
        }
    )
})

// Dark Mode / light mode

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
};
