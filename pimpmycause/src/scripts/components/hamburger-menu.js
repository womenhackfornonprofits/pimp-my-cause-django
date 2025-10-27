/* Hamburger Menu */
const $ = require('qwery');

const $navigation = $('.js-header-nav')[0];

if (!$navigation) return;

$navigation.addEventListener('click', (event) => {

    const $srcElement = event.target;
    let $currentToggle = $srcElement;


    while ($currentToggle && !$currentToggle.classList.contains('js-nav-toggle')) {
        $currentToggle  = $currentToggle.parentElement;
    }

    if (!$currentToggle) return;

    if (document.body.className.match('nav--active')) {
        $navigation.classList.remove('navigation__menu--mobile');
        document.body.classList.remove('nav--active');
    } else {
        $navigation.classList.add('navigation__menu--mobile');
        document.body.classList.add('nav--active');
    }
});
