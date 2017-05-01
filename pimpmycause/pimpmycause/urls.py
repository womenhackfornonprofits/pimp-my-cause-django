from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views

from django.views.generic.base import (
    TemplateView,
)
from profiles.views import (
    RegistrationView,
    ActivationComplete,
    profile_update,
    profile_detail,
    marketer_list,
    cause_list,
)
from core.views import homepage
from adverts.views import advert_add

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
        r'^logout/$',
        auth_views.logout,
        {'template_name': 'profiles/logout.html'},
        name='logout',
    ),
    url(
        r'^accounts/login/$',
        auth_views.login,
        {'template_name': 'profiles/login.html'},
        name='login',
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
        TemplateView.as_view(template_name='core/team.html'),
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
        r'^become-a-partner/$',
        TemplateView.as_view(template_name='core/become-a-partner.html'),
        name="become_a_partner"
    ),
    url(
        r'^terms-and-conditions/$',
        TemplateView.as_view(template_name='core/terms_and_conditions.html'),
        name="terms_and_conditions"
    ),
    url(
        r'^accounts/register/$',
        RegistrationView.as_view(form_class=PimpUserRegistrationForm),
        name='registration_register'
    ),
    url(
        r'^accounts/registration/complete/$',
        TemplateView.as_view(template_name="registration/registration_complete.html"),
        name='registration_complete'
    ),
    url(
        r'^accounts/activate/complete/$',
        ActivationComplete.as_view(),
        name='activation_complete'
    ),
    url(
        r'^s3direct/',
        include('s3direct.urls')
    ),
    url(
        r'^accounts/profile/edit$',
        profile_update,
        name='profile_update'
    ),
    url(
        r'^search/marketer/$',
        marketer_list,
        name='search_marketer'
    ),
    url(
        r'^search/cause/$',
        cause_list,
        name='search_cause'
    ),
    url(
        r'^accounts/profile/(?P<user_id>\d+)/$',
        profile_detail,
        name='profile_detail'
    ),
    url(
        r'^accounts/',
        include('registration.backends.default.urls')
    ),
    url(
        r'^cause/(?P<cause_id>\d+)/adverts/add$',
        advert_add,
        name='advert_add'
    ),
]
