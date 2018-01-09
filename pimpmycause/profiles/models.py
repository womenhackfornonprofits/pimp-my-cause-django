from __future__ import unicode_literals

from django.contrib.gis.db import models
from django.db.models.signals import (
    post_save,
)
from django.dispatch import receiver
from django.utils.encoding import python_2_unicode_compatible
from django.contrib.gis.geos import Point
from django.core.exceptions import ValidationError

from custom_user.models import AbstractEmailUser
from django_countries.fields import CountryField
from s3direct.fields import S3DirectField

import logging
import geocoder


log = logging.getLogger("pimpmycause")


@python_2_unicode_compatible
class PimpUser(AbstractEmailUser):

    MARKETER = 0
    CAUSE = 1
    ADMIN = 2
    USER_TYPE_CHOICES = (
        (MARKETER, "Marketer"),
        (CAUSE, "Cause"),
        (ADMIN, "Admin")
    )
    REQUIRED_FIELDS = ['usertype']

    # basic info
    name = models.CharField(max_length=24, blank=True)
    surname = models.CharField(max_length=24, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    image = S3DirectField(dest='user-profile-images', blank=True)

    # location info
    country = CountryField(blank=True, blank_label='Select country')
    city = models.CharField(max_length=85, blank=True)
    postcode = models.CharField(max_length=12, blank=True)
    location = models.PointField(blank=True, null=True)

    # professional info
    position = models.CharField(max_length=100, blank=True)
    usertype = models.IntegerField(
        choices=USER_TYPE_CHOICES,
        default=MARKETER,
    )
    bio = models.TextField(max_length=1000, blank=True)
    cause_name = models.CharField(max_length=1000, blank=True)

    # social accounts
    twitter = models.URLField(max_length=100, blank=True)
    linkedin = models.URLField(max_length=100, blank=True)
    website = models.URLField(max_length=100, blank=True)

    featured = models.BooleanField(default=False)

    def __str__(self):
        if (self.usertype == self.CAUSE):
            return '%s' % (self.cause_name)
        else:
            return '%s %s' % (self.surname, self.name)

    def save(self, **kwargs):
        if (self.usertype == self.CAUSE and self.cause_name.is_empty()):
            raise ValidationError("Cause name is required")

        super(PimpUser, self).save(**kwargs)

    @property
    def is_admin(self):
        return self.usertype in [PimpUser.ADMIN]

    @property
    def is_marketer(self):
        return self.usertype in [PimpUser.MARKETER]

    @property
    def is_cause(self):
        return self.usertype in [PimpUser.CAUSE]

    @property
    def is_geolocated(self):
        if (not self.location):
            return False
        else:
            return True


@receiver(post_save, sender=PimpUser)
def geolocate_user(sender, instance, *args, **kwargs):

    if (not instance.location):
        address = '{}, {}, {}'.format(instance.city, instance.postcode, instance.country)
        g = geocoder.google(address)

        if g.latlng:
            instance.location = Point(g.latlng[0], g.latlng[1])
    else:
        log.info('User already has a location set %s' % instance.location)


@receiver(post_save, sender=PimpUser)
def create_user_profile(sender, instance, *args, **kwargs):

    if (instance.usertype == PimpUser.MARKETER):
        MarketerProfile.objects.get_or_create(profile=instance)

    elif (instance.usertype == PimpUser.CAUSE):
        CauseProfile.objects.get_or_create(profile=instance)

    else:
        log.info('Created an Admin user without a profile')


@python_2_unicode_compatible
class Skill(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
            return self.name


@python_2_unicode_compatible
class Qualification(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=500, null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)

    def __str__(self):
            return self.name


@python_2_unicode_compatible
class MarketerProfile(models.Model):
    profile = models.OneToOneField(
        PimpUser,
        on_delete=models.CASCADE,
        primary_key=True,
        limit_choices_to={'usertype': PimpUser.MARKETER}
    )

    skill = models.ManyToManyField(
        "profiles.Skill",
        blank=True
    )
    qualification = models.ManyToManyField(
        "profiles.Qualification",
        blank=True
    )
    experience = models.CharField(max_length=1000, blank=True)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.profile.name


@python_2_unicode_compatible
class CauseProfile(models.Model):

    DISASTER_RELIEF = 0
    POVERTY_ALLEVIATION = 1
    ENVIRONMENT = 2
    EDUCATION_AND_SKILLS = 3
    ANIMAL_WELFARE = 4
    CHILDREN_AND_YOUTH = 5
    DISABILITY = 6
    HEALTH = 7
    FOOD = 8
    FAMILY_SUPPORT = 9
    CARE_FOR_THE_ELDERY = 10

    CAUSE_CATEGORY_CHOICES = (
        (DISASTER_RELIEF, "Disaster Relief"),
        (POVERTY_ALLEVIATION, "Poverty Alleviation"),
        (ENVIRONMENT, "Environment"),
        (EDUCATION_AND_SKILLS, "Education and Skills"),
        (ANIMAL_WELFARE, "Animal Welfare"),
        (CHILDREN_AND_YOUTH, "Children and Youth"),
        (DISABILITY, "Disability"),
        (HEALTH, "Health"),
        (FOOD, "Food"),
        (FAMILY_SUPPORT, "Family Support"),
        (CARE_FOR_THE_ELDERY, "Care for the Eldery")
    )

    profile = models.OneToOneField(
        PimpUser,
        on_delete=models.CASCADE,
        primary_key=True,
        limit_choices_to={'usertype': PimpUser.CAUSE}
    )
    mission = models.CharField(max_length=1000, blank=True)
    category = models.IntegerField(choices=CAUSE_CATEGORY_CHOICES, null=True)

    def __str__(self):
        return '%s' % self.profile.cause_name
