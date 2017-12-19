from django import forms

from pimpuser_messages.models import PimpUserMessage


class PimpUserMessageForm(forms.ModelForm):

    class Meta:
        model = PimpUserMessage
        fields = ('subject', 'message')
        widgets = {
            'message': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }
