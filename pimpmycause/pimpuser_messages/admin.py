from django.contrib import admin

from models import PimpUserMessage


class PimpUserMessageAdmin(admin.ModelAdmin):

    list_select_related = ['sender', 'recipient']
    list_display = ['subject', 'sender', 'recipient', 'sent_at', 'read_at']


admin.site.register(PimpUserMessage, PimpUserMessageAdmin)
