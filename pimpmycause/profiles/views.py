from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class LoginView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/login.html"

class RegistrationView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/register.html"