import django_filters
from django_filters import MultipleChoiceFilter

from profiles.models import (
    PimpUser,
    CauseProfile
)
from adverts.models import Advert


class MarketerFilter(django_filters.FilterSet):

    class Meta:
        model = PimpUser
        fields = {
            'city': ['icontains'],
            'position': ['icontains'],
            'country': ['exact'],
            'bio': ['icontains'],
            'marketerprofile__availability': ['exact'],
            'marketerprofile__skill': ['contains']
        }


class CauseFilter(django_filters.FilterSet):
    causeprofile__category = MultipleChoiceFilter(choices=CauseProfile.CAUSE_CATEGORY_CHOICES)

    class Meta:
        model = PimpUser
        fields = {
            'city': ['icontains'],
            'country': ['exact'],
            'bio': ['icontains'],
            'cause_name': ['icontains'],
            'causeprofile__category': ['icontains'],
            'causeprofile__mission': ['icontains'],
        }


class HelpWantedAdsFilter(django_filters.FilterSet):

    class Meta:
        model = Advert
        fields = {
            'skills': ['contains'],
            'description': ['icontains'],
            'title': ['icontains'],
        }
