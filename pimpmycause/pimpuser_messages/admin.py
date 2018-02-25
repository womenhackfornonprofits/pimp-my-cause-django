from django.contrib import admin

from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply,
)


class PimpUserMessageReplyInline(admin.StackedInline):

    model = PimpUserMessageReply

    list_display = ['message', 'sent_at', 'read_at']
    verbose_name_plural = "replies"
    extra = 1
    max_num = 1


class PimpUserMessageAdmin(admin.ModelAdmin):

    list_select_related = ['sender', 'recipient']
    list_display = ['subject', 'sender', 'recipient', 'sent_at', 'read_at']
    search_fields = ['subject', 'message_body']
    inlines = (PimpUserMessageReplyInline,)
    raw_id_fields = ('sender', 'recipient')


admin.site.register(PimpUserMessage, PimpUserMessageAdmin)
