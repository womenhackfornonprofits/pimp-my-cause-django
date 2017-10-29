const $ = require('qwery');
const $tickBox = $('.js-terms-conditions')[0];
const $targetButton = $('.js-terms-conditions-target')[0];



if ($tickBox && $targetButton) {
    $tickBox.onchange = enableDisableTargetButton;
}

function enableDisableTargetButton(event) {
    $targetButton.disabled = !this.checked;
}