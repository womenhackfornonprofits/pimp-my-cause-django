require('./components/rotating-cubes');
require('./components/hamburger-menu');
require('./components/profile-image-preview');
require('./components/masonry');
require('./components/terms-conditions');
require('./components/registration-validation');
require('./components/cookie-alert');


const $ = require('qwery');

const $html = $('html')[0];

$html.classList.add('js');
