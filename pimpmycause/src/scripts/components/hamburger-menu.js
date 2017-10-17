/* Hamburger Menu */

const $ = require('qwery');
const $navigation = $('js-header-nav')[0];
const $menuEl = $('.js-header-list')[0]

$navigation.addEventListener('click', function (event) {
    const $srcElement = event.target;

    $srcElement.classList.contains('js-nav-toggle') ? $menuEl.classList.toggle('navigation__menu--mobile') : $menuEl.classList.remove('navigation__menu--mobile');

});