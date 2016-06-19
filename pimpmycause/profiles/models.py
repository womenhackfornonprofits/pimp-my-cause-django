from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField

# Create your models here.
class Pimp_User(models.Model):
    #main_user
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #telephone
    phone = models.CharField(max_length=15)
    #country
    country = CountryField()
    #city
    city = models.CharField(max_length=85)
    #postcode
    postcode = models.CharField(max_length=12)
    #position
    position = models.CharField(max_length=85)
    #usertype
    USERTYPE_CHOICES = (("MKTR","Marketer"),("CAUSE","Cause"))
    usertype = models.CharField(max_length=8,choices=USERTYPE_CHOICES)
    #twitter
    twitter = models.CharField(max_length=30)
    