from django.shortcuts import render
from django.db.models import Count
from django.http import QueryDict
from django.contrib.gis.db.models.functions import Distance

from profiles.models import PimpUser
from adverts.models import Advert
from search.filters import (
    MarketerFilter,
    CauseFilter,
    HelpWantedAdsFilter,
)


def marketer_list(request):
    """Marketer search view."""
    filters = QueryDict('country=%s' % request.user.country, mutable=True)
    filters.update(request.GET)

    marketer_list = MarketerFilter(
        request.GET,
        queryset=PimpUser.objects.filter(
            usertype=PimpUser.MARKETER,
            is_active=True
        )
    )

    if request.user.is_authenticated:
        if request.user.is_geolocated:
            marketer_list_with_distance = MarketerFilter(
                filters,
                queryset=PimpUser.objects.filter(
                    usertype=PimpUser.MARKETER,
                    is_active=True
                )
                .annotate(
                    distance=Distance('location', request.user.location)
                )
                .order_by('distance', '-date_joined')
            )
            context = {
                'marketer_list': marketer_list_with_distance,
            }
        else:
            context = {'marketer_list': marketer_list}

    else:
        context = {'marketer_list': marketer_list}

    return render(request, 'search/search_marketer.html', context)


def cause_list(request):
    """Cause search view."""
    filters = QueryDict('country=%s' % request.user.country, mutable=True)
    filters.update(request.GET)

    query_set = (
        PimpUser.objects.filter(
            usertype=PimpUser.CAUSE,
            is_active=True
        )
        .select_related()
        .annotate(
            ads_count=Count('causeprofile__advert')
        )
    )

    if request.user.is_authenticated and request.user.is_geolocated:
        query_set = (
            query_set
            .annotate(
                distance=Distance('location', request.user.location)
            ).order_by('distance', '-date_joined')
        )

    cause_list = CauseFilter(
        filters,
        queryset=query_set
    )
    context = {'cause_list': cause_list}

    return render(request, 'search/search_cause.html', context)


def ads_list(request):
    """Help Wanted Ads search view."""
    filters = QueryDict('country=%s' % request.user.country, mutable=True)
    filters.update(request.GET)

    adverts_list = HelpWantedAdsFilter(
        filters,
        queryset=Advert.objects.all()
        .order_by('-created_at')
    )

    context = {
        'adverts_list': adverts_list
    }

    return render(request, 'search/search_ads.html', context)
