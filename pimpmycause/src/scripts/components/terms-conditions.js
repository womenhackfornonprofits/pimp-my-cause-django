const $ = require('qwery');

const $tickBox = $('.js-terms-conditions')[0];
const $targetButton = $('.js-terms-conditions-target')[0];


function enableDisableTargetButton() {
    $targetButton.disabled = !this.checked;
}

if ($tickBox && $targetButton) {
    $tickBox.onchange = enableDisableTargetButton;
}
