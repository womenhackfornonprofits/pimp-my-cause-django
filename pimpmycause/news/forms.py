from django import forms

from news.models import NewsPost


class NewsPostForm(forms.ModelForm):

    class Meta:
        model = NewsPost
        fields = ('title', 'content', 'image')
