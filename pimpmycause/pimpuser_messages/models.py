from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.core.exceptions import ValidationError
from django.utils import timezone

from profiles.models import (
    PimpUser
)


@python_2_unicode_compatible
class PimpUserMessage(models.Model):
    sender = models.ForeignKey(PimpUser, related_name="message_sender")
    recipient = models.ForeignKey(PimpUser, related_name="message_recipient")
    sent_at = models.DateTimeField("sent at", null=True, blank=True)
    read_at = models.DateTimeField("read at", null=True, blank=True)

    subject = models.CharField(max_length=100, blank=True)
    message = models.TextField()

    def __str__(self):
        return "{}".format(self.subject)

    def save(self, **kwargs):
        if self.sender == self.recipient:
            raise ValidationError("You can't send messages to yourself")

        if not self.id:
            self.sent_at = timezone.now()
        super(PimpUserMessage, self).save(**kwargs)

    @property
    def unread(self):
        """Return whether the message was read or not"""
        if self.read_at is not None:
            return False
        return True


@python_2_unicode_compatible
class PimpUserMessageReply(models.Model):
    message = models.ForeignKey(
        PimpUserMessage,
        on_delete=models.CASCADE
    )
    sent_at = models.DateTimeField("sent at", null=True, blank=True)
    read_at = models.DateTimeField("read at", null=True, blank=True)
    reply_sender = models.ForeignKey(PimpUser, related_name="reply_sender")

    reply_body = models.TextField()

    def __str__(self):
        return "{}".format(self.message)

    def save(self, **kwargs):
        if not self.id:
            self.sent_at = timezone.now()
        super(PimpUserMessageReply, self).save(**kwargs)

    @property
    def unread(self):
        """Return whether the reply message was read or not"""
        if self.read_at is not None:
            return False
        return True
