from django import forms
from .models import PimpUser

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = PimpUser
        