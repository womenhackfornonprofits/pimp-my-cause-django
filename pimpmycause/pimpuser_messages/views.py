from django.shortcuts import (
    get_object_or_404,
    render,
    redirect,
    HttpResponseRedirect
)
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.db.models import (
    Count,
    Case,
    When,
)

from profiles.models import PimpUser
from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply
)
from pimpuser_messages.forms import (
    PimpUserMessageForm,
    PimpUserMessageReplyForm,
)


@login_required
def pimpuser_messages_inbox(request):
    user = get_object_or_404(
        PimpUser,
        id=request.user.id,
    )

    messages = (
        PimpUserMessage.objects
        .filter(
            recipient=user
        )
        .annotate(
            number_of_unread_replies=Count(
                Case(
                    When(pimpusermessagereply__read_at__isnull=True, then=1),
                )
            )
        )
        .order_by('-sent_at')
    )

    context = {'messages': messages}

    return render(request, 'pimpuser_messages/inbox.html', context)


@login_required
def pimpuser_messages_sent(request):
    user = get_object_or_404(
        PimpUser,
        id=request.user.id,
    )

    messages = (
        PimpUserMessage.objects
        .filter(
            sender=user
        )
        .order_by('-sent_at')
    )

    context = {'messages': messages}

    return render(request, 'pimpuser_messages/sent.html', context)


@login_required
def pimpuser_message_form(request, recipient_id, message_id=None):
    """Message send"""
    if message_id:
        message = get_object_or_404(
            PimpUserMessage,
            id=message_id,
        )
    else:
        message = None

    recipient = get_object_or_404(
        PimpUser,
        id=recipient_id
    )

    if request.method == 'POST':
        sender = get_object_or_404(
            PimpUser,
            id=request.user.id
        )

        message_form = PimpUserMessageForm(
            request.POST,
            instance=message
        )

        if message_form.is_valid():
            message = message_form.save(commit=False)
            message.sender = sender
            message.recipient = recipient
            message.save()

            return render(request, 'pimpuser_messages/message_sent.html', {
                'message_form': message_form,
                'recipient': recipient
            })

    else:
        message_form = PimpUserMessageForm(instance=message)

        return render(request, 'pimpuser_messages/message_form.html', {
            'message_form': message_form,
            'recipient': recipient
        })


@login_required
def pimpuser_message_detail(request, message_id):
    """Message view"""
    if request.method == 'GET':
        message = get_object_or_404(
            PimpUserMessage,
            id=message_id,
        )

        message.read_at = timezone.now()
        message.save()

        replies_list = PimpUserMessageReply.objects.filter(
            message=message
        )

        for reply in replies_list:
            reply.read_at = timezone.now()
            reply.save()

        return render(request, 'pimpuser_messages/message_detail.html', {
            'message': message,
            'replies_list': replies_list
        })


@login_required
def pimpuser_message_reply(request, message_id):
    """Reply to a messag"""
    message = get_object_or_404(
        PimpUserMessage,
        id=message_id,
    )

    conversation = None

    if request.method == 'POST':
        message_form = PimpUserMessageReplyForm(
            request.POST,
            instance=conversation
        )

        if message_form.is_valid():

            conversation = message_form.save(commit=False)
            conversation.message = message
            conversation.reply_sender = request.user
            conversation.save()

            return redirect(
                'message_detail',
                message_id=message_id
            )

    if request.method == 'GET':
        return render(request, 'pimpuser_messages/message_detail.html', {
            'message': message
        })
