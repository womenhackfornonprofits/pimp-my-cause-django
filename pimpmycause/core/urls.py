from django.urls import re_path

from django.views.generic.base import (
    TemplateView,
)

from core.views import (
    homepage,
    team_member_list,
)

urlpatterns = [
    re_path(
        r'^$',
        homepage,
        name="homepage"
    ),
    re_path(
        r'^contact/$',
        TemplateView.as_view(template_name='core/contact.html'),
        name="contact"
    ),
    re_path(
        r'^about/$',
        TemplateView.as_view(template_name='core/about.html'),
        name="about"
    ),
    re_path(
        r'^meet-the-team/$',
        team_member_list,
        name="team"
    ),
    re_path(
        r'^who-we-are/$',
        TemplateView.as_view(template_name='core/who-we-are.html'),
        name="who_we_are"
    ),
    re_path(
        r'^how-it-works/$',
        TemplateView.as_view(template_name='core/how-it-works.html'),
        name="how_it_works"
    ),
    re_path(
        r'^cookies/$',
        TemplateView.as_view(template_name='core/cookies.html'),
        name="cookies"
    ),
    re_path(
        r'^become-a-partner/$',
        TemplateView.as_view(template_name='core/become-a-partner.html'),
        name="become_a_partner"
    ),
    re_path(
        r'^terms-and-conditions/$',
        TemplateView.as_view(template_name='core/terms-and-conditions.html'),
        name="terms_and_conditions"
    ),
    re_path(
        r'^team-challenges/$',
        TemplateView.as_view(template_name='core/team-challenges.html'),
        name="team_challenges"
    ),
]
