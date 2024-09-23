const $burgerButton = document.querySelector("#js-burger-btn");
const $navbarTarget = document.querySelector("#js-navbar-target");

$burgerButton.onclick = function() {
  $burgerButton.classList.toggle("js-active");
  $navbarTarget.classList.toggle("js-active");
};
