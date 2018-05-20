from django.conf.urls import url

from django.views.generic.base import (
    TemplateView,
)

from core.views import (
    homepage,
    team_member_list,
)

urlpatterns = [
    url(
        r'^$',
        homepage,
        name="homepage"
    ),
    url(
        r'^contact/$',
        TemplateView.as_view(template_name='core/contact.html'),
        name="contact"
    ),
    url(
        r'^about/$',
        TemplateView.as_view(template_name='core/about.html'),
        name="about"
    ),
    url(
        r'^meet-the-team/$',
        team_member_list,
        name="team"
    ),
    url(
        r'^who-we-are/$',
        TemplateView.as_view(template_name='core/who-we-are.html'),
        name="who_we_are"
    ),
    url(
        r'^how-it-works/$',
        TemplateView.as_view(template_name='core/how-it-works.html'),
        name="how_it_works"
    ),
    url(
        r'^cookies/$',
        TemplateView.as_view(template_name='core/cookies.html'),
        name="cookies"
    ),
    url(
        r'^become-a-partner/$',
        TemplateView.as_view(template_name='core/become-a-partner.html'),
        name="become_a_partner"
    ),
    url(
        r'^terms-and-conditions/$',
        TemplateView.as_view(template_name='core/terms-and-conditions.html'),
        name="terms_and_conditions"
    ),
    url(
        r'^team-challenges/$',
        TemplateView.as_view(template_name='core/team-challenges.html'),
        name="team_challenges"
    ),
]
