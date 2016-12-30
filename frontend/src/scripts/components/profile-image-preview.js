/* Profile Image preview */

const $imageEl = document.querySelectorAll('.profile-img')[0];
const $s3DirectWidget = document.querySelectorAll('.s3direct')[0];


$s3DirectWidget.addEventListener('change', function (event) {
	console.log('Changed');
	setTimeout(function(){ 
		const $uploadedImageLinkEl = document.querySelectorAll('.file-link')[0];
		console.log($uploadedImageLinkEl.href);
		$imageEl.src = $uploadedImageLinkEl.href;
	}, 500);


});

