from django.template.loader import render_to_string
from django.urls import reverse
from django.core.mail import send_mail
from django.conf import settings


def send_new_message_alert(request, message):

    message_url = request.build_absolute_uri(
        reverse(
            'message_detail',
            args=[message.id],
        )
    )
    sender = message.sender
    recipient = message.recipient

    if(request.user == message.recipient):
        recipient = message.sender
        sender = message.recipient

    message_body = message.message_body
    latest_reply = message.pimpusermessagereply_set.last()

    if (latest_reply):
        message_body = latest_reply.reply_body
        sender = request.user

    html_message = render_to_string(
        'email/new_message_template.html',
        {
            'sender': sender,
            'recipient': recipient.name,
            'message_body': message_body,
            'message_url': message_url,
        }
    )

    plain_message = render_to_string(
        'email/new_message_template.txt',
        {
            'recipient': recipient.name,
            'sender': sender,
            'message_body': message_body,
            'message_url': message_url,
        }
    )

    send_mail(
        "You have a new message!",
        plain_message,
        settings.DEFAULT_FROM_EMAIL,
        [recipient.email],
        html_message=html_message,
    )
