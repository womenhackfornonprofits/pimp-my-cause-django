from django.urls import (
    re_path,
    include,
)

from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy


from django.views.generic.base import (
    TemplateView,
)
from profiles.views import (
    RegistrationView,
    ActivationComplete,
)
from profiles.forms import PimpUserRegistrationForm

urlpatterns = [
    re_path(
        r'^admin/',
        admin.site.urls
    ),
    re_path(
        r'^logout/$',
        auth_views.LogoutView.as_view(template_name='profiles/logout.html'),
        name='logout',
    ),
    re_path(
        r'^accounts/login/$',
        auth_views.LoginView.as_view(template_name= 'profiles/login.html'),
        name='login',
    ),
    re_path(
        r'^accounts/register/$',
        RegistrationView.as_view(form_class=PimpUserRegistrationForm),
        name='registration_register'
    ),
    re_path(
        r'^accounts/registration/complete/$',
        TemplateView.as_view(template_name="registration/registration_complete.html"),
        name='registration_complete'
    ),
    re_path(
        r'^accounts/activate/complete/$',
        ActivationComplete.as_view(),
        name='activation_complete'
    ),
    re_path(
        r'^profile/',
        include('profiles.urls')
    ),
    re_path(
        r'^s3direct/',
        include('s3direct.urls')
    ),
    re_path(
        r'',
        include('core.urls')
    ),
    re_path(r'^accounts/password/reset/$',
        auth_views.PasswordResetView.as_view(
            success_url=reverse_lazy('auth_password_reset_done'),
            html_email_template_name='registration/password_reset_email.html'
        ), name='auth_password_reset'),
    re_path(
        r'^accounts/',
        include('registration.backends.default.urls')
    ),
    re_path(
        r'',
        include('core.urls')
    ),
    re_path(
        r'^adverts/',
        include('adverts.urls')
    ),
    re_path(
        r'^search/',
        include('search.urls')
    ),
    re_path(
        r'^news/',
        include('news.urls')
    ),
    re_path(
        r'^messages/',
        include('pimpuser_messages.urls')
    ),
    re_path(
        r'^tinymce/',
        include('tinymce.urls')
    ),
]
