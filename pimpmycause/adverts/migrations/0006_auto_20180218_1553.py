# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-02-18 15:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adverts', '0005_auto_20180112_0809'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advert',
            name='title',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]