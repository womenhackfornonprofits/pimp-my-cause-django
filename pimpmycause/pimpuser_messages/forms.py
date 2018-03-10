from django import forms

from pimpuser_messages.models import (
    PimpUserMessage,
    PimpUserMessageReply
)


class PimpUserMessageForm(forms.ModelForm):
    message_body = forms.CharField(widget=forms.Textarea, label="Message")

    class Meta:
        model = PimpUserMessage
        fields = ('subject', 'message_body')
        widgets = {
            'message_body': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }


class PimpUserMessageReplyForm(forms.ModelForm):
    message_body = forms.CharField(widget=forms.Textarea, label="Message")

    class Meta:
        model = PimpUserMessageReply
        fields = ('reply_body',)
        widgets = {
            'reply_body': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }
