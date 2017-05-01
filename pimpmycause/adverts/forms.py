from django import forms
from django.utils import timezone

from adverts.models import Advert
from profiles.models import Skill

from s3direct.widgets import S3DirectWidget


class AdvertForm(forms.ModelForm):

    skill = forms.ModelMultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(),
        queryset=Skill.objects.all()
    )
    deadline = forms.DateTimeField(widget=forms.widgets.SelectDateWidget(), initial=timezone.now())
    image = forms.URLField(widget=S3DirectWidget(dest='cause-advert-images',
                html=(
                    '<div class="s3direct" data-policy-url="{policy_url}">'
                    '  <a class="file-link" target="_blank" href="{file_url}">{file_name}</a>'
                    '  <a class="file-remove" href="#remove">Remove</a>'
                    '  <input class="file-url" type="hidden" value="{file_url}" id="{element_id}" name="{name}" />'
                    '  <input class="file-dest" type="hidden" value="{dest}">'
                    '  <input class="file-input js-input-file inputfile" type="file" id="file" name="file"/>'
                    '  <label for="file" class="button button--primary">Upload Ad Image</label>'
                    '  <div class="progress progress-striped active">'
                    '    <div class="bar"></div>'
                    '  </div>'
                    '</div>'
                )), required=False)

    class Meta:
        model = Advert
        fields = ('title', 'description', 'image', 'skill', 'deadline')
