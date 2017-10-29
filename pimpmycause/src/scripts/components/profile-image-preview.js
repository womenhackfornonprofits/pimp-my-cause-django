/* Profile Image preview */
const $ = require('qwery');
const $imageEl = $('.profile-img')[0];
const $s3DirectWidget = $('.js-image-update')[0];

if ($s3DirectWidget) {
    $s3DirectWidget.onchange=loadPreviewImage;
}

function loadPreviewImage(event) {
    setTimeout(() => {
        const $uploadedImageLinkEl = $('.file-link')[0];
        $imageEl.src = $uploadedImageLinkEl.href;
    }, 4000);
}

