from django.contrib import admin

from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply,
)


class PimpUserMessageReplyInline(admin.StackedInline):

    model = PimpUserMessageReply

    list_display = ['message', 'sent_at', 'read_at']
    verbose_name_plural = "replies"


class PimpUserMessageAdmin(admin.ModelAdmin):

    list_select_related = ['sender', 'recipient']
    list_display = ['subject', 'sender', 'recipient', 'sent_at', 'read_at']
    search_fields = ['subject', 'sender', 'recipient']
    inlines = (PimpUserMessageReplyInline,)


admin.site.register(PimpUserMessage, PimpUserMessageAdmin)
