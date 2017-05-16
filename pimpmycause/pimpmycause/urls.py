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
)
from profiles.forms import PimpUserRegistrationForm

urlpatterns = [
    url(
        r'^admin/',
        admin.site.urls
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
        r'^accounts/profile/(?P<user_id>\d+)/$',
        profile_detail,
        name='profile_detail'
    ),
    url(
        r'^accounts/',
        include('registration.backends.default.urls')
    ),
    url(
        r'',
        include('core.urls')
    ),
    url(
        r'^adverts/',
        include('adverts.urls')
    ),
    url(
        r'^search/',
        include('search.urls')
    ),
]
