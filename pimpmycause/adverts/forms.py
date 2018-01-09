from django import forms
from django.utils import timezone

from adverts.models import Advert
from profiles.models import Skill

from s3direct.widgets import S3DirectWidget


class AdvertForm(forms.ModelForm):

    skills = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(),
        queryset=Skill.objects.all()
    )
    deadline = forms.DateTimeField(widget=forms.widgets.SelectDateWidget(), initial=timezone.now())
    image = forms.URLField(widget=S3DirectWidget(dest='cause-advert-images'), required=False)

    class Meta:
        model = Advert
        fields = ('title', 'description', 'skills', 'deadline')
