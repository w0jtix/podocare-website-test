const year = document.getElementById('year')
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

window.onload = function() {
    const menu_btn = document.querySelector('.hamburger_menu');
    const mobile_menu = document.querySelector('.mobile_nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}

const scrollUpButton = document.querySelector('.scroll_up_button');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollUpButton.classList.add('is-active');   
    } else {
        scrollUpButton.classList.remove('is-active');
    }

})