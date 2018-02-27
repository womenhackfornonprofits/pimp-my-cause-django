from django import forms
from django.utils import timezone

from adverts.models import Advert
from profiles.models import Skill


class AdvertForm(forms.ModelForm):

    skills = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(),
        queryset=Skill.objects.all()
    )
    deadline = forms.DateTimeField(widget=forms.widgets.SelectDateWidget(), initial=timezone.now())

    class Meta:
        model = Advert
        fields = ('title', 'description', 'skills', 'deadline')
