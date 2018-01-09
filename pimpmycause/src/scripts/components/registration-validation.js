/* Registration validation: hides the Cause Name if usertype is Marketer */
const $ = require('qwery');

const $userTypeEl = $('#id_usertype')[0];
const $causeNameEl = $('#id_cause_name')[0];

function hideShowCauseName() {
    if ($userTypeEl.value === '0') {
        $causeNameEl.classList.add('visuallyhidden');
    } else {
        $causeNameEl.classList.remove('visuallyhidden');
    }
}

if ($userTypeEl && $causeNameEl) {
    $userTypeEl.onchange = hideShowCauseName();
}
