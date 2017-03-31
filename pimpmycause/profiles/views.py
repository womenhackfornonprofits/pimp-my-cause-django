from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.http import HttpResponseRedirect

from registration.backends.default import views as registration_views
from profiles.forms import (
    PimpUserRegistrationForm,
    PimpUserProfileForm,
    MarketerUserProfileForm,
    CauseUserProfileForm
)
from profiles.models import PimpUser
from django.shortcuts import get_object_or_404


class RegistrationComplete(TemplateView):
    """The Registration Complete view."""

    template_name = "registration/registration_complete.html"


class RegistrationView(registration_views.RegistrationView):
    """The Registration view."""

    template_name = 'profiles/register.html'
    form_class = PimpUserRegistrationForm
    success_url = '/accounts/registration-complete/'


class ActivationComplete(TemplateView):
    """The Activation Complete view."""

    template_name = 'registration/activate_complete.html'


class TermsAndConditions(TemplateView):
    """The Activation Complete view."""

    template_name = 'core/terms_and_conditions.html'


def logout_view(request):
    """Redirect user to homepage on logout."""
    logout(request)

    return HttpResponseRedirect("/")


def marketer_list(request):
    """Marketer search view."""
    marketer_list = (
        PimpUser.objects
        .filter(usertype=PimpUser.MARKETER)
        .order_by('-date_joined')
    )
    context = {'marketer_list': marketer_list}

    return render(request, 'search/search_marketer.html', context)


def profile_detail(request, user_id):
    user = get_object_or_404(
        PimpUser,
        id=user_id,
    )

    context = {'marketer': user}

    return render(request, 'profiles/detail.html', context)


@login_required
def profile_update(request):
    """Edit user profile."""
    if request.method == 'POST':
        profile_update_form = PimpUserProfileForm(request.POST,
                                                  instance=request.user)

        # MARKETER
        if (request.user.usertype == PimpUser.MARKETER):
            additional_profile_form = MarketerUserProfileForm(
                request.POST,
                instance=request.user.marketerprofile,
            )
        # CAUSE
        else:
            additional_profile_form = CauseUserProfileForm(
                request.POST,
                instance=request.user.causeprofile
            )

        if (profile_update_form.is_valid() & additional_profile_form.is_valid()):
            user_details = profile_update_form.save(commit=False)
            user_details.user = request.user
            user_details.save()

            profile_details = additional_profile_form.save(commit=False)
            profile_details.save()

            return redirect('profile_update')

    else:
        profile_update_form = PimpUserProfileForm(instance=request.user)

        # MARKETER
        if (request.user.usertype == PimpUser.MARKETER):
            additional_profile_form = MarketerUserProfileForm(
                instance=request.user.marketerprofile,
            )

        # CAUSE
        else:
            additional_profile_form = CauseUserProfileForm(
                instance=request.user.causeprofile,
            )

    context = {'profile_update_form': profile_update_form,
               'additional_profile_form': additional_profile_form}

    return render(request, 'profiles/profile.html', context)
