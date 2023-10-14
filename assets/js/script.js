const navLink = document.querySelectorAll('.linkMenu');
const sections = document.querySelectorAll('.section');

document.querySelector(".leftBar .toggle-btn").addEventListener("click", function(){
    document.querySelector(".leftBar").classList.toggle("active");
});


let currentSection = 'home';
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if(window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
            currentSection = section.id;
        }
    });
    navLink.forEach(link => {
        if(link.href.includes(currentSection)){
            document.querySelector('.activo').classList.remove('activo')
            link.classList.add('activo');
        }
    });
});