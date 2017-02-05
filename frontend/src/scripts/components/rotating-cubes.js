/* ROTATING HOMEPAGE CUBES */
'use strict';

const cubesList = document.querySelectorAll('.cube');

setInterval(function () {
    cubesList.forEach((cube) => {
    	cube.classList.toggle("active");
    })
}, 2500); 