from __future__ import unicode_literals

from django.db import models
from s3direct.fields import S3DirectField

from tinymce.models import HTMLField


class TeamMember(models.Model):
    MAIN = 0
    ADVISORY_BOARD = 1
    AMBASSADORS = 2
    USER_TYPE_CHOICES = (
        (MAIN, "Core"),
        (ADVISORY_BOARD, "Advisory Board"),
        (AMBASSADORS, "Ambassadors")
    )
    name = models.CharField(max_length=100, blank=True)
    surname = models.CharField(max_length=100, blank=True)
    position = models.CharField(max_length=100, blank=True)
    image = S3DirectField(dest='team-member-images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    visual_priority = models.IntegerField(choices=[(x, x) for x in range(1, 100)])
    group = models.IntegerField(
        choices=USER_TYPE_CHOICES,
        default=ADVISORY_BOARD,
    )

    # WYSIWYG Fields
    bio = HTMLField()

    def __str__(self):
        return "{} {} ({})".format(self.name, self.surname, self.created_at)
