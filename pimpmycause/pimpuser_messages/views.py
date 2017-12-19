from django.shortcuts import (
    get_object_or_404,
    render,
    redirect
)
from django.contrib.auth.decorators import login_required

from profiles.models import PimpUser
from pimpuser_messages.models import PimpUserMessage
from pimpuser_messages.forms import PimpUserMessageForm


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
        .order_by('sent_at')
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
        .order_by('sent_at')
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

            return redirect('inbox')

    else:
        message_form = PimpUserMessageForm(instance=message)

    return render(request, 'pimpuser_messages/message_form.html', {
        'message_form': message_form,
        'recipient': recipient
    })


@login_required
def pimpuser_message_detail(request, message_id):
    """Message view"""
    message = get_object_or_404(
        PimpUserMessage,
        id=message_id,
    )

    return render(request, 'pimpuser_messages/message_detail.html', {
        'message': message,
    })
