from django.shortcuts import (
    get_object_or_404,
)

from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply,
)
from profiles.models import PimpUser


def unread_messages_number(request):
    user = get_object_or_404(
        PimpUser,
        id=request.user.id,
    )

    unread_messages_number = (
        PimpUserMessage.objects
        .filter(
            recipient=user,
            read_at__isnull=True,
        )
        .count()
    )

    unread_replies_number = (
        PimpUserMessageReply.objects
        .filter(
            message__recipient=user,
            read_at__isnull=True,
        )
        .count()
    )

    unread_message_count = unread_replies_number + unread_messages_number

    return {'unread_message_count': unread_message_count}
