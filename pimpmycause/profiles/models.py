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
    name = models.CharField(max_length=240, blank=True, null=True)
    surname = models.CharField(max_length=240, blank=True, null=True)
    phone = models.CharField(max_length=250, blank=True, null=True)
    image = S3DirectField(dest='user-profile-images', blank=True, null=True)

    # location info
    country = CountryField(blank=True, null=True, blank_label='Select country')
    city = models.CharField(max_length=1000, blank=True, null=True)
    postcode = models.CharField(max_length=120, blank=True, null=True)
    location = models.PointField(blank=True, null=True)

    # professional info
    position = models.CharField(max_length=1000, blank=True, null=True)
    usertype = models.IntegerField(
        choices=USER_TYPE_CHOICES,
        default=MARKETER,
    )
    bio = models.TextField(max_length=10000, blank=True, null=True)
    cause_name = models.CharField(
        max_length=1000,
        blank=True,
        null=True
    )

    # social accounts
    twitter = models.URLField(max_length=1000, blank=True, null=True)
    linkedin = models.URLField(max_length=1000, blank=True, null=True)
    website = models.URLField(max_length=1000, blank=True, null=True)

    featured = models.BooleanField(default=False)
    # storing old geo data
    geo_data = models.TextField(max_length=300, blank=True, null=True)
    has_reactivated = models.BooleanField(default=False)

    def __str__(self):
        if (self.usertype == self.CAUSE):
            return '%s' % (self.cause_name)
        else:
            return '%s %s' % (self.surname, self.name)

    def save(self, **kwargs):
        if (self.usertype == self.CAUSE and not self.cause_name):
            raise ValidationError("Invalid value: Cause name is required", code='invalid')

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
def geolocate_user(sender, instance, created, *args, **kwargs):
    post_save.disconnect(geolocate_user, sender=PimpUser)

    if not created:
        if not instance.country or instance.location:
            log.info('User is missing a country or location')

            if (instance.city or instance.postcode):
                city = instance.city
                postcode = instance.postcode
                address = city if city else '' + postcode if postcode else ' '
                g = geocoder.google(address)

                if g.latlng and (not instance.location):
                    instance.location = Point(g.latlng[0], g.latlng[1])

                if g.country:
                    instance.country = g.country

                if g.city:
                    instance.city = g.city

                instance.save(update_fields=['country'])
                post_save.connect(geolocate_user, sender=PimpUser)

        else:
            log.info(
                'User already has a location = {}, country = {}'.format(
                    instance.location,
                    instance.country
                )
            )


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
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    marketer = models.ForeignKey(
        "profiles.MarketerProfile",
    )

    def __str__(self):
        return '%s: %s' % (self.name, self.description)

    def __unicode__(self):
        return unicode(self.name)


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

    experience = models.CharField(max_length=10000, blank=True, null=True)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.profile.name or ''

    def __unicode__(self):
        return unicode(self.profile.name)


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
    mission = models.CharField(max_length=10000, blank=True)
    category = models.IntegerField(choices=CAUSE_CATEGORY_CHOICES, null=True)

    def __str__(self):
        return '%s' % self.profile.cause_name
