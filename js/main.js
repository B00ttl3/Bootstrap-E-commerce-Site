// function toggleVisibility() {
//     const headerDiv = document.getElementById('header');
//     if (headerDiv.style.display === 'none') {
//         headerDiv.style.display = 'block';
//     } else {
//         headerDiv.style.display = 'none';
//     }
// }

let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }
}

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})