from django.conf.urls import url

from pimpuser_messages.views import (
    pimpuser_messages_inbox,
    pimpuser_messages_sent,
    pimpuser_message_form
)


urlpatterns = [
    url(
        r'^inbox/',
        pimpuser_messages_inbox,
        name='inbox'
    ),
    url(
        r'^sent/',
        pimpuser_messages_sent,
        name='sent_messages'
    ),
    url(
        r'^new/(?P<recipient_id>\d+)/$',
        pimpuser_message_form,
        name='new_message'
    )
]
