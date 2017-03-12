from django.conf.urls import url, include
from django.contrib import admin

from django.views.generic.base import (
    TemplateView,
)
from profiles.views import (
    RegistrationView,
    RegistrationComplete,
    ActivationComplete,
    profile_update,
    TermsAndConditions,
    logout_view,
    SearchMarketerView,
)
from core.views import (
    homepage
)

from profiles.forms import PimpUserRegistrationForm

urlpatterns = [
    url(
        r'^admin/',
        admin.site.urls
    ),
    url(
        r'^$',
        homepage,
        name="homepage"
    ),
    url(
        r'^logout/',
        logout_view,
        name="logout_view"
    ),
    url(
        r'^contact/',
        TemplateView.as_view(template_name='core/contact.html'),
        name="contact"
    ),
    url(
        r'^about/',
        TemplateView.as_view(template_name='core/about.html'),
        name="about"
    ),
    url(
        r'^meet-the-team/',
        TemplateView.as_view(template_name='core/team.html'),
        name="team"
    ),
    url(
        r'^who-we-are/',
        TemplateView.as_view(template_name='core/who-we-are.html'),
        name="who_we_are"
    ),
    url(
        r'^how-it-works/',
        TemplateView.as_view(template_name='core/how-it-works.html'),
        name="how_it_works"
    ),
    url(
        r'^become-a-partner/',
        TemplateView.as_view(template_name='core/become-a-partners.html'),
        name="become_a_partner"
    ),
    url(
        r'^our-partners/',
        TemplateView.as_view(template_name='core/our-partners.html'),
        name="our_partners"
    ),
    url(
        r'^terms-and-conditions/',
        TermsAndConditions.as_view(),
        name="terms_and_conditions"
    ),
    url(
        r'^accounts/register/',
        RegistrationView.as_view(form_class=PimpUserRegistrationForm),
        name='registration_register'
    ),
    url(
        r'^accounts/registration-complete/',
        RegistrationComplete.as_view(),
        name='registration_complete'
    ),
    url(
        r'^accounts/activate/complete/',
        ActivationComplete.as_view(),
        name='activation_complete'
    ),
    url(
        r'^accounts/',
        include('registration.backends.default.urls')
    ),
    url(
        r'^s3direct/',
        include('s3direct.urls')
    ),
    url(
        r'^accounts/profile/',
        profile_update,
        name='profile_update'
    ),
    url(
        r'^search/marketer/',
        SearchMarketerView.as_view(),
        name='search_marketer'
    ),
]
