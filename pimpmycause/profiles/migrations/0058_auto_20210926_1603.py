# Generated by Django 2.2 on 2021-09-26 16:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0057_auto_20180301_2220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='causeprofile',
            name='profile',
            field=models.OneToOneField(limit_choices_to={'usertype': 1}, on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='marketerprofile',
            name='profile',
            field=models.OneToOneField(limit_choices_to={'usertype': 0}, on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]