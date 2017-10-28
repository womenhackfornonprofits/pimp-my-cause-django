/* Hamburger Menu */

const $ = require('qwery');
const $navigation = $('.js-header-nav')[0];

$navigation.addEventListener('click', function (event) {
    const $srcElement = event.target;

    $srcElement.classList.contains('js-nav-toggle') ? $navigation.classList.toggle('navigation__menu--mobile') : $navigation.classList.remove('navigation__menu--mobile');

});