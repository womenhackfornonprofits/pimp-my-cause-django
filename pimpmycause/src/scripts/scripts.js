require('./components/rotating-cubes');
require('./components/hamburger-menu');
require('./components/profile-image-preview');
require('./components/masonry');
require('./components/terms-conditions');
const $ = require('qwery');

const $html = $('html')[0];

$html.classList.add('js');
