from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from registration.backends.default import views as registration_views
from profiles.forms import (
    PimpUserRegistrationForm,
    PimpUserProfileForm,
    MarketerUserProfileForm,
    CauseUserProfileForm
)
from profiles.models import PimpUser
from adverts.models import Advert


class RegistrationView(registration_views.RegistrationView):
    """The Registration view."""

    template_name = 'registration/registration_form.html'
    form_class = PimpUserRegistrationForm
    success_url = '/accounts/registration/complete/'


class ActivationComplete(TemplateView):
    """The Activation Complete view."""

    template_name = 'registration/activate_complete.html'


class TermsAndConditions(TemplateView):
    """The Activation Complete view."""

    template_name = 'core/terms_and_conditions.html'


def profile_detail(request, user_id):
    user = get_object_or_404(
        PimpUser,
        id=user_id,
    )

    if user.usertype == PimpUser.CAUSE:
        adverts_list = (
            Advert.objects
            .all()
            .filter(cause_profile=user_id)
        )

        context = {
            'adverts_list': adverts_list,
            'profile_user': user
        }

    else:
        context = {'profile_user': user}

    return render(request, 'profiles/detail.html', context)


@login_required
def profile_edit(request):
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
            additional_profile_form.save_m2m()

        return redirect(
            'profile_detail',
            user_id=request.user.id
        )

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
