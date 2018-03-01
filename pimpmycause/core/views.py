from django.shortcuts import (
    render,
    render_to_response
)

from profiles.models import PimpUser
from news.models import NewsPost
from core.models import TeamMember
from django.template import RequestContext


def homepage(request):
    """The home page view."""
    limit = 7
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
    news_post_list = (
        NewsPost.objects
        .order_by('-created_at')[:3]
    )

    context = {
        'featured_marketer_list': featured_marketer_list,
        'featured_cause_list': featured_cause_list,
        'news_post_list': news_post_list,
    }

    return render(
        request,
        'index.html',
        context
    )


def team_member_list(request):
    team_member_list_json = (
        TeamMember.objects
        .values_list('name', 'surname', 'bio', 'image', 'position', 'visual_priority', 'group')
        .order_by('visual_priority')
    )

    team_member_list = (
        TeamMember.objects
        .order_by('visual_priority')
    )

    context = {
        'team_member_list': team_member_list,
        'team_member_list_json': list(team_member_list_json)
    }

    return render(
        request,
        'core/team.html',
        context
    )
