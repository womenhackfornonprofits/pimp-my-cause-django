# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-09-26 22:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0011_pimpuser_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='causeprofile',
            name='categories',
            field=models.CharField(blank=True, choices=[(1, 'Disaster Relief'), (2, 'Poverty Alleviation'), (3, 'Environment'), (4, 'Education and Skills'), (5, 'Animal Welfare'), (6, 'Children and Youth'), (7, 'Disability'), (8, 'Health'), (9, 'Food'), (10, 'Family Support'), (11, 'Care for the Eldery')], max_length=8),
        ),
        migrations.AlterField(
            model_name='pimpuser',
            name='featured',
            field=models.BooleanField(default=False),
        ),
    ]
