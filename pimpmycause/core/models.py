from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from s3direct.fields import S3DirectField

from tinymce.models import HTMLField


@python_2_unicode_compatible
class TeamMember(models.Model):
    name = models.CharField(max_length=100, blank=True)
    surname = models.CharField(max_length=100, blank=True)
    position = models.CharField(max_length=100, blank=True)
    image = S3DirectField(dest='news-post-images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    visual_priority = models.IntegerField(choices=[(x, x) for x in range(1, 20)])

    # WYSIWYG Fields
    bio = HTMLField()

    def __str__(self):
        return "{} {} ({})".format(self.name, self.surname, self.created_at)
