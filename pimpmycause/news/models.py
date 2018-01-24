from __future__ import unicode_literals

from django.db import models
from django.template.defaultfilters import slugify
from django.utils.encoding import python_2_unicode_compatible
from s3direct.fields import S3DirectField

from tinymce.models import HTMLField


@python_2_unicode_compatible
class NewsPost(models.Model):
    title = models.CharField(max_length=100, blank=True)
    image = S3DirectField(dest='news-post-images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField('slug', max_length=100, blank=True, unique=True)
    intro = models.CharField(max_length=300, blank=True)

    # WYSIWYG Fields
    content = HTMLField()

    def __str__(self):
        return "{} ({})".format(self.title, self.created_at)

    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title)
        super(NewsPost, self).save(*args, **kwargs)
