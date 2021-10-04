/* Registration validation:
 * - hides the Cause Name if usertype is Marketer
 * - pre-populates user choice form homepage if available
 */
const $ = require('qwery');

const $userTypeEl = $('#id_usertype')[0];
const $causeNameEl = $('#id_cause_name')[0];
const parsedUrl = new URL(window.location.href);
const userType = parsedUrl.searchParams.get('usertype') || null;

function setUserType(userTypeValue = 0) {
    $userTypeEl.value = userTypeValue;
}

function hideShowCauseName() {
    if ($userTypeEl.value === '0') {
        $causeNameEl.parentElement.classList.add('visuallyhidden')
        $causeNameEl.classList.add('visuallyhidden');
        $causeNameEl.removeAttribute('required');
    } else {
        $causeNameEl.parentElement.classList.remove('visuallyhidden')
        $causeNameEl.classList.remove('visuallyhidden');
        $causeNameEl.setAttribute('required',true);
    }
}

if (userType && $userTypeEl && $causeNameEl) {
    setUserType(userType);
}

if ($userTypeEl && $causeNameEl) {
    hideShowCauseName();
    $userTypeEl.onchange = hideShowCauseName;
}
