# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-02-24 00:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pimpuser_messages', '0005_auto_20180223_2341'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pimpusermessage',
            name='subject',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
