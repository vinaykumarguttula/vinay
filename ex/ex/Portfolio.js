const header = document.querySelector("header");

let darkmode = document.querySelector('#darkmode');


window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
 menu.classList.toggle('fa-x');
 navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('open');
};

let section = document.querySelectorAll('section')
let navliks = document.querySelectorAll('ul li')
window.onscroll = () => {
    let current = ''

    section.forEach((section)=>{
        const sectionTop = section.offsetTop
        if(window.scrollY >= sectionTop -100){
            current = section.getAttribute('id')
        }
    })

    navliks.forEach((li) =>{
        li.classList.remove('active')
        if(li.classList.contains(current)){
            li.classList.add('active')
        }

    })
}
darkmode.onclick = () => {
    if (darkmode.classList.contains('fa-moon')) {
      darkmode.classList.replace('fa-moon', 'fa-sun');
      document.body.classList.add('active');
    } else {
      darkmode.classList.replace('fa-sun', 'fa-moon');
      document.body.classList.remove('active');
    }
  };

 