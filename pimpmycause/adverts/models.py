from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from profiles.models import (
    CauseProfile,
    Skill,
    PimpUser,
)


@python_2_unicode_compatible
class Advert(models.Model):
    title = models.CharField(max_length=150, blank=True)
    description = models.TextField(max_length=4000, blank=True)
    skills = models.ManyToManyField(
        Skill,
        blank=True,
        related_name='advert_skill'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(blank=True, null=True)
    cause_profile = models.ForeignKey(
        CauseProfile,
        limit_choices_to={'profile__usertype': PimpUser.CAUSE},
        on_delete=models.CASCADE
    )

    def __str__(self):
        return "{} ({})".format(self.cause_profile, self.title)
