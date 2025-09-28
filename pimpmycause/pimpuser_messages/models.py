from __future__ import unicode_literals

from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

from profiles.models import (
    PimpUser
)


class PimpUserMessage(models.Model):
    sender = models.ForeignKey(PimpUser, related_name="message_sender", on_delete=models.CASCADE)
    recipient = models.ForeignKey(PimpUser, related_name="message_recipient", on_delete=models.CASCADE)
    sent_at = models.DateTimeField("sent at", null=True, blank=True)
    read_at = models.DateTimeField("read at", null=True, blank=True)

    subject = models.CharField(max_length=300, blank=True)
    message_body = models.TextField()
    updated_at = models.DateTimeField("updated at", null=True, blank=True)

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


class PimpUserMessageReply(models.Model):
    message = models.ForeignKey(
        PimpUserMessage,
        on_delete=models.CASCADE
    )
    sent_at = models.DateTimeField("sent at", null=True, blank=True)
    read_at = models.DateTimeField("read at", null=True, blank=True)
    reply_sender = models.ForeignKey(PimpUser, related_name="reply_sender",  on_delete=models.CASCADE)

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
