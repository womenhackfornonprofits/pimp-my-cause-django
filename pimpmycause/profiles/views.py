from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import FormView

from profiles.forms import PimpUserRegistrationForm


# Create your views here.
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


class RegistrationView(FormView):
    template_name = 'profiles/register.html'
    form_class = PimpUserRegistrationForm
    success_url = '/registration_complete/'

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        return super(RegistrationView, self).form_valid(form)