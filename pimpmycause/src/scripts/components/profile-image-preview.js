/* Profile Image preview */
const $ = require('qwery');
const $imageEl = $('.profile-img')[0];
const $s3DirectWidget = $('.s3direct')[0];


if ($s3DirectWidget) {
	$s3DirectWidget.addEventListener('change', (event) => {
		setTimeout(() => {
			const $uploadedImageLinkEl = $('.file-link')[0];
			$imageEl.src = $uploadedImageLinkEl.href;
		}, 500);

	});
}

