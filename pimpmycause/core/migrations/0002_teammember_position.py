# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2017-09-24 18:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='teammember',
            name='position',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
