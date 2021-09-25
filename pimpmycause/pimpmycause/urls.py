from django.conf.urls import (
    url,
    include,
    handler400,
    handler403,
    handler404,
    handler500
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
    url(
        r'^admin/',
        admin.site.urls
    ),
    url(
        r'^logout/$',
        auth_views.LogoutView.as_view(template_name='profiles/logout.html'),
        name='logout',
    ),
    url(
        r'^accounts/login/$',
        auth_views.LoginView.as_view(template_name= 'profiles/login.html'),
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
    url(r'^accounts/password/reset/$',
        auth_views.PasswordResetView.as_view(
            success_url=reverse_lazy('auth_password_reset_done'),
            html_email_template_name='registration/password_reset_email.html'
        ), name='auth_password_reset'),
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
