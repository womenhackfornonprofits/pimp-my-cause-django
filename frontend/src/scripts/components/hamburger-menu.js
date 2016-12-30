/* Hamburger Menu */

const $navigation = document.querySelectorAll('.js-header-nav')[0];
const $menuEl = document.querySelectorAll('.js-header-list')[0]

$navigation.addEventListener('click', function (event) {
    const $srcElement = event.target;

    $srcElement.classList.contains('js-nav-toggle') ? $menuEl.classList.toggle('navigation__menu--mobile') : $menuEl.classList.remove('navigation__menu--mobile');

});