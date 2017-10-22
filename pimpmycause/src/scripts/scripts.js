'use strict';

const $ = require('qwery');
const rotatingCubes = require('./components/rotating-cubes');
const hamburgerMenu = require('./components/hamburger-menu');
const profileImagePreview = require('./components/profile-image-preview');
const geolocator = require('./components/geolocation')
const masonry = require('./components/masonry')

const $html = $('html')[0];

$html.classList.add('js');