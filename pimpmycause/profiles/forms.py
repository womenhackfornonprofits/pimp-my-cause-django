from django import forms
from .models import Pimp_User

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = Pimp_User
        