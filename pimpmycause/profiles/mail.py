# TODO send user email when a message is sent to them

from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from profiles.models import PimpUser


url_live = 'http://www.pimpmycause.org/accounts/password/reset/'
url_live_heroku = 'https://live-pimpmycause.herokuapp.com/accounts/password/reset/'
url_local = 'http://127.0.0.1:8000/accounts/password/reset/'


def send_activation_email(user, url):

    html_message = render_to_string(
        'email/new_site_password_reset_email_template.html',
        {
            'user': user,
            'activation_url': url,
        }
    )

    plain_message = render_to_string(
        'email/new_site_password_reset_email_template.txt',
        {
            'user': user,
            'activation_url': url,
        }
    )

    send_mail(
        "Reset your password",
        plain_message,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        html_message=html_message,
    )


def send_new_message_alert(user, url):
    pass


def send_activation_email_to_all(url):
    for user in PimpUser.object.all():
        send_activation_email(user, url)
