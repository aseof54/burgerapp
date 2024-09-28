const crossButton = document.getElementById('crossButton');
const burgerMenuButton = document.getElementById('burgerMenu');

crossButton.addEventListener("click", hiddenToggle)
burgerMenuButton.addEventListener("click", hiddenToggle)
function hiddenToggle() {
    document.querySelector(".dropdown-menu").classList.toggle("dropdown-hidden")
}