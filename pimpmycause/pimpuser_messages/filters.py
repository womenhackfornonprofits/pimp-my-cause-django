import django_filters

from pimpuser_messages.models import (
    PimpUserMessage,
)


class MessageFilter(django_filters.FilterSet):
    def __init__(self, *args, **kwargs):
        super(MessageFilter, self).__init__(*args, **kwargs)
        self.filters['sender__name__icontains'].label = 'Sender'

    class Meta:
        model = PimpUserMessage
        fields = {
            'sender__name': ['icontains'],
        }
