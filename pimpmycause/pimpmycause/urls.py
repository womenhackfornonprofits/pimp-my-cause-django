"""pimpmycause URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from core.views import HomepageView, ContactView, AboutView, MeetTheTeam, OurPartners, Partnerships, BecomeAPartner, WhoWeAre, HowItWorks
from profiles.views import RegistrationView, RegistrationComplete, ActivationComplete, profile_update, logout_view
from profiles.forms import PimpUserRegistrationForm

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', HomepageView.as_view(), name="index"),
    url(r'^logout/', logout_view, name="logout_view"),
    url(r'^contact/', ContactView.as_view(), name="contact"),
    url(r'^about/', AboutView.as_view(), name="about"),
    url(r'^meet-the-team/', MeetTheTeam.as_view(), name="team"),
    url(r'^who-we-are/', WhoWeAre.as_view(), name="who_we_are"),
    url(r'^how-it-works/', HowItWorks.as_view(), name="how_it_works"),
    url(r'^partnerships/', Partnerships.as_view(), name="partenrships"),
    url(r'^become-a-partner/', BecomeAPartner.as_view(), name="become_a_partner"),
    url(r'^our-partners/', OurPartners.as_view(), name="our_partners"),
    url(r'^accounts/register/', RegistrationView.as_view(form_class=PimpUserRegistrationForm), name='registration_register'),
    url(r'^accounts/registration-complete/', RegistrationComplete.as_view(), name='registration_complete'),
    url(r'^accounts/activate/complete/', ActivationComplete.as_view(), name='activation_complete'),
    url(r'^accounts/', include('registration.backends.default.urls')),
    url(r'^s3direct/', include('s3direct.urls')),
    url(r'^accounts/profile/', profile_update, name='profile_update'),

]
