/* Hamburger Menu */
const $ = require('qwery');

const $navigation = $('.js-header-nav')[0];

$navigation.addEventListener('click', (event) => {
    const $srcElement = event.target;

    if ($srcElement.classList.contains('js-nav-toggle')) {
        $navigation.classList.add('navigation__menu--mobile');
        document.body.classList.add('nav--active');
    } else {
        $navigation.classList.remove('navigation__menu--mobile');
        document.body.classList.remove('nav--active');
    }
});
