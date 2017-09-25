/* ROTATING HOMEPAGE CUBES */
'use strict';
const $ = require('qwery');
const cubesList = $('.cube');

setInterval(function () {
    cubesList.forEach((cube) => {
    	cube.classList.toggle("active");
    })
}, 2500);