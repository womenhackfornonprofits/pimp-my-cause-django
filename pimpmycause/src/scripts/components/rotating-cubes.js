/* ROTATING HOMEPAGE CUBES */
const $ = require('qwery');

const cubesList = $('.cube');

setInterval(() => {
    cubesList.forEach((cube) => {
        cube.classList.toggle('active');
    });
}, 2500);
