from django.shortcuts import render

from profiles.models import PimpUser


def homepage(request):
    """The home page view."""
    limit = 3
    featured_marketer_list = (
        PimpUser.objects
        .filter(featured=True)
        .filter(usertype=PimpUser.MARKETER)
        .order_by('-date_joined')[:limit]
    )
    featured_cause_list = (
        PimpUser.objects
        .filter(featured=True)
        .filter(usertype=PimpUser.CAUSE)
        .order_by('-date_joined')[:limit]
    )

    return render(
        request,
        'index.html',
        {
            'featured_marketer_list': featured_marketer_list,
            'featured_cause_list': featured_cause_list,
        }
    )
