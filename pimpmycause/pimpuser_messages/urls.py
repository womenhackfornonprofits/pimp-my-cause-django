from django.urls import re_path

from pimpuser_messages.views import (
    pimpuser_messages_inbox,
    pimpuser_messages_sent,
    pimpuser_message_form,
    pimpuser_message_detail,
)


urlpatterns = [
    re_path(
        r'^inbox/',
        pimpuser_messages_inbox,
        name='inbox'
    ),
    re_path(
        r'^sent/',
        pimpuser_messages_sent,
        name='sent_messages'
    ),
    re_path(
        r'^new/(?P<recipient_id>\d+)/$',
        pimpuser_message_form,
        name='new_message'
    ),
    re_path(
        r'^view/(?P<message_id>\d+)/$',
        pimpuser_message_detail,
        name='message_detail'
    )
]
