from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    #firstname
    firstname = models.CharField(max_length=70)
    #surname
    #email
    #telephone
    #country
    #city
    #postcode
    #password
    #position
    #usertype
    #twitter
