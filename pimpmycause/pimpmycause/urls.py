from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views

from django.views.generic.base import (
    TemplateView,
)
from profiles.views import (
    RegistrationView,
    ActivationComplete,
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
        r'^profile/',
        include('profiles.urls')
    ),
    url(
        r'^s3direct/',
        include('s3direct.urls')
    ),
    url(
        r'',
        include('core.urls')
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
    url(
        r'^news/',
        include('news.urls')
    ),
    url(
        r'^messages/',
        include('pimpuser_messages.urls')
    ),
    url(
        r'^tinymce/',
        include('tinymce.urls')
    ),

]
