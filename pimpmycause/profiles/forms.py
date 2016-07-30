from django import forms

from profiles.models import PimpUser
from registration.forms import RegistrationForm

class PimpUserRegistrationForm(RegistrationForm):
	
	name = forms.CharField()
	surname = forms.CharField()
	email = forms.EmailField()
	phone = forms.CharField()
	twitter = forms.URLField()
	country = forms.CharField()
	city = forms.CharField()
	postcode = forms.CharField()
	password = forms.CharField()
	usertype = forms.CharField()
	position = forms.CharField()

	class Meta:
		model = PimpUser
		fields = ('email', 'name', 'surname', 'phone', 'twitter', 'country',
				'city', 'postcode', 'password', 'usertype', 'position')

	def clean(self):
		cleaned_data = super(PimpUserRegistrationForm, self).clean()
		if 'password1' in self.cleaned_data and 'password2' in self.cleaned_data:
			if self.cleaned_data['password1'] != self.cleaned_data['password2']:
				raise forms.ValidationError("Passwords don't match. Please enter both fields again.")
				return self.cleaned_data


        