from django.core.paginator import (
    Paginator,
    EmptyPage,
    PageNotAnInteger
)
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
    # Pre-set user country is user has country
    # if request.user.is_authenticated and request.user.country:
    #     filters = QueryDict('country=%s' % request.user.country, mutable=True)
    #     filters.update(request.GET)
    # else:
    filters = request.GET

    marketer_query = PimpUser.objects.filter(
        usertype=PimpUser.MARKETER,
        is_active=True
    )

    marketer_list = MarketerFilter(
        filters,
        queryset=marketer_query
        .order_by('-date_joined')
    )

    if request.user.is_authenticated and request.user.is_geolocated:
        marketer_list_with_distance = MarketerFilter(
            filters,
            queryset=marketer_query
            .annotate(
                distance=Distance('location', request.user.location)
            )
            .latest()
            .order_by('distance')
        )
        marketer_list = marketer_list_with_distance

    # Pagination
    page = request.GET.get('page')
    paginator = Paginator(marketer_list.qs, 12)

    try:
        marketer_list_paginated = paginator.page(page)
    except PageNotAnInteger:
        marketer_list_paginated = paginator.page(1)
    except EmptyPage:
        marketer_list_paginated = paginator.page(paginator.num_pages)

    context = {
        'marketer_list': marketer_list_paginated,
        'marketer_filters': marketer_list
    }

    return render(request, 'search/search_marketer.html', context)


def cause_list(request):
    """Marketer search view."""
    # Pre-set user country is user has country
    # if request.user.is_authenticated and request.user.country:
    #     filters = QueryDict('country=%s' % request.user.country, mutable=True)
    #     filters.update(request.GET)
    # else:
    filters = request.GET

    cause_query = (
        PimpUser.objects.filter(
            usertype=PimpUser.CAUSE,
            is_active=True
        )
        .select_related()
        .annotate(
            ads_count=Count('causeprofile__advert')
        )
    )

    cause_list = CauseFilter(
        filters,
        queryset=cause_query
        .order_by('-date_joined')
    )

    if request.user.is_authenticated and request.user.is_geolocated:
        cause_list_with_distance = CauseFilter(
            filters,
            queryset=cause_query
            .annotate(
                distance=Distance('location', request.user.location)
            )
            .order_by('distance')
        )
        cause_list = cause_list_with_distance

    # Pagination
    page = request.GET.get('page')
    paginator = Paginator(cause_list.qs, 12)

    try:
        cause_list_paginated = paginator.page(page)
    except PageNotAnInteger:
        cause_list_paginated = paginator.page(1)
    except EmptyPage:
        cause_list_paginated = paginator.page(paginator.num_pages)

    context = {
        'cause_list': cause_list_paginated,
        'cause_filters': cause_list
    }

    return render(request, 'search/search_cause.html', context)


def ads_list(request):
    """Help Wanted Ads search view."""
    if request.user.is_authenticated and request.user.country:
        filters = QueryDict('country=%s' % request.user.country, mutable=True)
        filters.update(request.GET)
    else:
        filters = request.GET

    adverts_list = HelpWantedAdsFilter(
        filters,
        queryset=Advert.objects.all()
        .order_by('-created_at')
    )

    context = {
        'adverts_list': adverts_list
    }

    return render(request, 'search/search_ads.html', context)
