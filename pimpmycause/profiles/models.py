from __future__ import unicode_literals

from django.db import models
from custom_user.models import AbstractEmailUser
from django_countries.fields import CountryField
from s3direct.fields import S3DirectField

class PimpUser(AbstractEmailUser):

    MARKETER = 0
    CAUSE = 1
    USER_TYPE_CHOICES = (
        (MARKETER, "Marketer"),
        (CAUSE, "Cause")
    )

    # basic info
    name = models.CharField(max_length=24, blank=True)
    surname = models.CharField(max_length=24, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    country = CountryField(blank=True)
    city = models.CharField(max_length=85, blank=True)
    postcode = models.CharField(max_length=12, blank=True)

    # professional info
    position = models.CharField(max_length=100, blank=True)
    usertype = models.IntegerField(choices=USER_TYPE_CHOICES, null=True)
    bio = models.CharField(max_length=1000, blank=True)

    # social accounts
    twitter = models.URLField(max_length=100, blank=True)
    linkedin = models.URLField(max_length=100, blank=True)
    website = models.URLField(max_length=100, blank=True)

    image = S3DirectField(dest='user-profile-images', blank=True)
    featured = models.BooleanField(default=False)

class MarketerProfile(models.Model):

    ADVERTISING = 0
    BRANDING = 1
    BUSINESS_DEVELOPMENT = 2
    CUSTOMER_INSIGHTS = 3
    DIGITAL_MARKETING = 4
    GRAPHIC_DESIGN = 5
    INNOVATION = 6
    MARKETING = 7
    PHOTOGRAPHY = 8
    PR = 9
    SEO = 10
    SOCIAL_MEDIA = 11
    STRATEGIC_MARKETING = 12
    VIDEOGRAPHY = 13
    WEB_DEV = 14

    QUALIFICATION_CHOICES = (
        (ADVERTISING, "Advertising"),
        (BRANDING, "Branding"),
        (BUSINESS_DEVELOPMENT, "Business Development"),
        (CUSTOMER_INSIGHTS, "Customer Insights"),
        (DIGITAL_MARKETING, "Digital Marketing"),
        (GRAPHIC_DESIGN, "Graphic Design"),
        (INNOVATION, "Innovation"),
        (MARKETING, "Marketing"),
        (PHOTOGRAPHY, "Photography"),
        (PR, "PR"),
        (SEO, "SEO"),
        (SOCIAL_MEDIA, "Social Media Marketing"),
        (STRATEGIC_MARKETING, "Strategic Marketing"),
        (VIDEOGRAPHY, "Videography"),
        (WEB_DEV, "Web Development")
    )

    profile = models.ForeignKey(
        PimpUser,
        limit_choices_to={'usertype': PimpUser.CAUSE }
    )

    qualifications = models.CharField(max_length=8, choices=QUALIFICATION_CHOICES, blank=True)
    experience = models.CharField(max_length=1000, blank=True)
    availability = models.BooleanField(default=True)

class CauseProfile(models.Model):

    profile = models.ForeignKey(
        PimpUser,
        limit_choices_to={'usertype': PimpUser.CAUSE }
    )

    mission = models.CharField(max_length=1000, blank=True)
