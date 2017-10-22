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

    image = forms.URLField(widget=S3DirectWidget(dest='user-profile-images',
                    html=(
                        '<div class="s3direct" data-policy-url="{policy_url}">'
                        '  <a class="file-link" target="_blank" href="{file_url}">{file_name}</a>'
                        '  <a class="file-remove" href="#remove">Remove</a>'
                        '  <input class="file-url" type="hidden" value="{file_url}" id="{element_id}" name="{name}" />'
                        '  <input class="file-dest" type="hidden" value="{dest}">'
                        '  <input class="file-input js-input-file inputfile" type="file" id="file" name="file"/>'
                        '  <label for="file" class="button button--primary">Change</label>'
                        '  <div class="progress progress-striped active">'
                        '    <div class="bar"></div>'
                        '  </div>'
                        '</div>'
                    )), required=False)

    class Meta:
        model = PimpUser
        fields = ('bio', 'linkedin', 'website', 'twitter', 'name', 'surname',
                  'phone', 'image', 'city', 'country', 'position')
        widgets = {'country': CountrySelectWidget()}


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
