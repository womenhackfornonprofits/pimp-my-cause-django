const $ = require('qwery');

const $cookieAlertButton = $('.js-cookie-alert-button')[0];
const $cookieAlertElement = $('.js-cookie-alert')[0];

const localStorageLocation = $('.js-cookie-alert')[0].getAttribute('data-storage') || 'cookieAlert';


if ($cookieAlertButton && $cookieAlertElement) {
    // hide cookieAlert on click
    $cookieAlertButton.addEventListener('click', (clickEvent) => {
        const $srcElement = clickEvent.target;

            if ($srcElement.classList.contains('js-cookie-alert-button')) {
                localStorage.setItem(localStorageLocation, 'Y');
                $cookieAlertElement.classList.add('hidden');
            }

            return false;
        }
    );

    // Check if alert was previously shown to user, and pop up if not
    if (localStorage.getItem(localStorageLocation) !== 'Y') {
        $cookieAlertElement.classList.remove('hidden');
    }

}
