from django import forms

from profiles.models import PimpUser
from registration.forms import RegistrationForm

class PimpUserRegistrationForm(RegistrationForm):

	class Meta:
		model = PimpUser
		fields = ('email','password1', 'password2', 'name', 'surname', 'phone', 'twitter', 'country',
				 'city', 'postcode', 'usertype', 'position')


class PimpUserProfileForm(forms.ModelForm):

	class Meta:
		model = PimpUser
		fields = ('bio', 'linkedin', 'website')
