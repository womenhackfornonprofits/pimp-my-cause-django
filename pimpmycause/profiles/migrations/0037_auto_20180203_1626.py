# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-02-03 16:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0036_auto_20180203_1623'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pimpuser',
            name='bio',
            field=models.TextField(blank=True, max_length=10000, null=True),
        ),
    ]
