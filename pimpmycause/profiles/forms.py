from django import forms

from profiles.models import PimpUser, MarketerProfile
from registration.forms import RegistrationForm
from s3direct.widgets import S3DirectWidget


class PimpUserRegistrationForm(RegistrationForm):
	
	class Meta:
		model = PimpUser
		fields = ('email','password1', 'password1', 'name', 'surname', 'phone', 'twitter', 'country',
				 'city', 'postcode', 'usertype', 'position')


class PimpUserProfileForm(forms.ModelForm):

	class Meta:
		model = PimpUser
		fields = ('bio', 'linkedin', 'website', 'twitter', 'name', 'surname', 'phone', 'image')


class MarketerProfileForm(forms.ModelForm):

	class Meta:
		model = MarketerProfile
		fields = ('experience', 'availability', 'qualifications')


class S3DirectUploadForm(forms.Form):

    images = forms.URLField(widget=S3DirectWidget(dest='user-profile-images'))
