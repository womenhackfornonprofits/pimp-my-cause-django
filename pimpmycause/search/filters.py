import django_filters

from profiles.models import PimpUser


class MarketerFilter(django_filters.FilterSet):

    class Meta:
        model = PimpUser
        fields = ['city']
