from django import forms

from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply
)


class PimpUserMessageForm(forms.ModelForm):

    class Meta:
        model = PimpUserMessage
        fields = ('subject', 'message')
        widgets = {
            'message': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }


class PimpUserMessageReplyForm(forms.ModelForm):

    class Meta:
        model = PimpUserMessageReply
        fields = ('reply_body',)
        widgets = {
            'reply_body': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }
