from django.db import (
    models,
)
from django import forms
import django_filters
from django_filters import (
    MultipleChoiceFilter,
)

from profiles.models import (
    PimpUser,
    CauseProfile
)
from adverts.models import Advert


class MarketerFilter(django_filters.FilterSet):
    def __init__(self, *args, **kwargs):
        super(MarketerFilter, self).__init__(*args, **kwargs)
        self.filters['city__icontains'].label = 'City'
        self.filters['country'].label = 'Country'
        self.filters['position__icontains'].label = 'Position'
        self.filters['bio__icontains'].label = 'Keyword(s)'
        self.filters['marketerprofile__skill__contains'].label = 'Skills offered'
        self.filters['marketerprofile__availability'].label = 'Available'

    class Meta:
        model = PimpUser
        fields = {
            'city': ['icontains'],
            'country': ['exact'],
            'position': ['icontains'],
            'bio': ['icontains'],
            'marketerprofile__skill': ['contains'],
            'marketerprofile__availability': ['exact'],
        }


class CauseFilter(django_filters.FilterSet):
    causeprofile__category__icontains = MultipleChoiceFilter(
        choices=CauseProfile.CAUSE_CATEGORY_CHOICES,
    )

    def __init__(self, *args, **kwargs):
        super(CauseFilter, self).__init__(*args, **kwargs)
        self.filters['city__icontains'].label = 'City'
        self.filters['country'].label = 'Country'
        self.filters['bio__icontains'].label = 'Description'
        self.filters['causeprofile__category'].label = 'Category'
        self.filters['cause_name__icontains'].label = 'Cause Name'

    class Meta:
        model = PimpUser
        fields = {
            'city': ['icontains'],
            'country': ['exact'],
            'causeprofile__category': ['exact'],
            'bio': ['icontains'],
            'cause_name': ['icontains'],
        }


class HelpWantedAdsFilter(django_filters.FilterSet):
    def __init__(self, *args, **kwargs):
        super(HelpWantedAdsFilter, self).__init__(*args, **kwargs)
        self.filters['description__icontains'].label = 'Keyword(s)'
        self.filters['title__icontains'].label = 'Title'
        self.filters['skills__contains'].label = 'Skills required'
        self.filters['cause_profile__category'].label = 'Category'
        self.filters['cause_profile__profile__country'].label = 'Country'

    class Meta:
        model = Advert
        fields = {
            'skills': ['contains'],
            'description': ['icontains'],
            'title': ['icontains'],
            'cause_profile__category': ['exact'],
            'cause_profile__profile__country': ['exact'],
        }
