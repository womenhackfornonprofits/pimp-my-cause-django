/* Profile Image preview */

const $imageEl = document.querySelectorAll('.profile-img')[0];
const $s3DirectWidget = document.querySelectorAll('.s3direct')[0];


if ($s3DirectWidget) {
	$s3DirectWidget.addEventListener('change', function (event) {
		setTimeout(function(){
			const $uploadedImageLinkEl = document.querySelectorAll('.file-link')[0];
			$imageEl.src = $uploadedImageLinkEl.href;
		}, 500);
	});
}

