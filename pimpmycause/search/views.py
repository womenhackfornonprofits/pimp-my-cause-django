from django.shortcuts import render
from django.db.models import Count

from profiles.models import PimpUser
from search.filters import MarketerFilter


def marketer_list(request):
    """Marketer search view."""
    # marketer_list = (
    #     PimpUser.objects
    #     .filter(usertype=PimpUser.MARKETER, is_active=True)
    #     .order_by('-date_joined')
    # )

    marketer_list = MarketerFilter(
        request.GET,
        queryset=PimpUser.objects.filter(
            usertype=PimpUser.MARKETER,
            is_active=True
        )
        .order_by('-date_joined')
    )

    context = {'marketer_list': marketer_list}

    return render(request, 'search/search_marketer.html', context)


def cause_list(request):
    """Cause search view."""
    cause_list = (
        PimpUser.objects
        .all()
        .select_related()
        .filter(usertype=PimpUser.CAUSE, is_active=True)
        .annotate(
            ads_count=Count('causeprofile__advert')
        )
    )

    context = {'cause_list': cause_list}

    return render(request, 'search/search_cause.html', context)
