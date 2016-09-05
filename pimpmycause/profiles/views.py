from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.views.generic.edit import FormView, UpdateView
from django.contrib.auth.decorators import login_required

from registration.backends.default import views as registration_views
from profiles.forms import PimpUserRegistrationForm, PimpUserProfileForm


class LoginView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/login.html"

class RegistrationComplete(TemplateView):
    """
    The Registration Complete view.
    """

    template_name = "registration/registration_complete.html"


class RegistrationView(registration_views.RegistrationView):
    """
    The Registration view.
    """

    template_name = 'profiles/register.html'
    form_class = PimpUserRegistrationForm
    success_url = '/accounts/registration-complete/'


class ActivationComplete(TemplateView):
    """
    The Activation Complete view.
    """

    template_name = 'registration/activate_complete.html'


@login_required 
def profile_update(request):
    if request.method == 'POST':
        profile_update_form = PimpUserProfileForm(request.POST, instance=request.user)
        
        if profile_update_form.is_valid():
            user_details = profile_update_form.save(commit=False)
            user_details.user = request.user
            user_details.save(update_fields=["bio", "website", "linkedin"])
            return redirect('profile_update')
    else:
        profile_update_form = PimpUserProfileForm(instance=request.user)

    context = {'profile_update_form': profile_update_form}

    return render(request, 'profiles/profile.html', context)

