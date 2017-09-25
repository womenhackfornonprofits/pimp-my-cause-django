# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2017-09-24 18:28
from __future__ import unicode_literals

from django.db import migrations, models
import s3direct.fields
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100)),
                ('surname', models.CharField(blank=True, max_length=100)),
                ('image', s3direct.fields.S3DirectField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(blank=True, max_length=60, unique=True, verbose_name='slug')),
                ('bio', tinymce.models.HTMLField()),
            ],
        ),
    ]
