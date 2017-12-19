from django import forms

from s3direct.widgets import S3DirectWidget
from django_countries.widgets import CountrySelectWidget


from profiles.models import (
    PimpUser,
    MarketerProfile,
    CauseProfile,
    Skill,
)
from registration.forms import RegistrationForm

MARKETER = 0
CAUSE = 1

USER_TYPE_CHOICES = (
    (MARKETER, "Marketer"),
    (CAUSE, "Cause"),
)


class PimpUserRegistrationForm(RegistrationForm):
    usertype = forms.ChoiceField(
        required=True,
        choices=USER_TYPE_CHOICES,
    )

    class Meta:
        model = PimpUser
        fields = ('name', 'surname', 'email', 'position', 'password1', 'password2',
                  'phone', 'twitter', 'city', 'postcode',
                  'country', 'usertype')


class PimpUserProfileForm(forms.ModelForm):

    name = forms.CharField(label='Your name', required=True)
    surname = forms.CharField(required=True)
    phone = forms.CharField(required=True)
    position = forms.CharField(required=True)
    bio = forms.CharField(widget=forms.Textarea, required=True)
    image = forms.URLField(widget=S3DirectWidget(dest='user-profile-images'), required=False)

    class Meta:
        model = PimpUser
        fields = ('bio', 'linkedin', 'website', 'twitter', 'name', 'surname',
                  'phone', 'image', 'city', 'country', 'position')
        widgets = {
            'country': CountrySelectWidget(),
            'bio': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }


class MarketerUserProfileForm(forms.ModelForm):

    skill = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(),
        queryset=Skill.objects.all()
    )

    class Meta:
        model = MarketerProfile
        fields = ('experience', 'availability', 'skill')


class CauseUserProfileForm(forms.ModelForm):

    class Meta:
        model = CauseProfile
        fields = ('mission', 'category', 'cause_name')
