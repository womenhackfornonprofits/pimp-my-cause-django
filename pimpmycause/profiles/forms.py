from django import forms

from s3direct.widgets import S3DirectWidget

from profiles.models import (
    PimpUser,
    MarketerProfile,
    CauseProfile,
    Skill,
    Qualification,
)
from registration.forms import RegistrationForm


class PimpUserRegistrationForm(RegistrationForm):
    usertype = forms.ChoiceField(
        required=True,
        choices=PimpUser.USER_TYPE_CHOICES,
    )

    def clean_cause_name(self):
        usertype = self.cleaned_data['usertype']
        data = self.cleaned_data['cause_name']

        if usertype == PimpUser.CAUSE and not data:
            raise forms.ValidationError("Cause name is required!")
        return data

    class Meta:
        model = PimpUser
        fields = ('name', 'surname', 'email', 'position', 'password1', 'password2',
                  'phone', 'twitter', 'city', 'postcode',
                  'country', 'usertype', 'cause_name')


class PimpUserProfileForm(forms.ModelForm):

    name = forms.CharField(label='Your name', required=True)
    surname = forms.CharField(required=True)
    phone = forms.CharField(required=True)
    position = forms.CharField(required=True)
    bio = forms.CharField(widget=forms.Textarea, required=False)
    image = forms.URLField(widget=S3DirectWidget(dest='user-profile-images'), required=False)

    class Meta:
        model = PimpUser
        fields = ('bio', 'linkedin', 'website', 'twitter', 'name', 'surname',
                  'cause_name', 'phone', 'image', 'city', 'country', 'position')
        widgets = {
            'bio': forms.Textarea(attrs={'rows': 15, 'cols': 15}),
        }


class QualificationForm(forms.ModelForm):
    class Meta:
        model = Qualification
        fields = ('name', 'description')


class MarketerUserProfileForm(forms.ModelForm):

    skill = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(),
        queryset=Skill.objects.all()
    )

    class Meta:
        model = MarketerProfile
        fields = ('experience', 'availability', 'skill',)


class CauseUserProfileForm(forms.ModelForm):
    category = forms.ChoiceField(
        required=True,
        choices=CauseProfile.CAUSE_CATEGORY_CHOICES,
    )

    class Meta:
        model = CauseProfile
        fields = ('mission', 'category')
