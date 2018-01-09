from django.contrib.gis import admin
from django.contrib.gis.db import models
from django.utils.translation import ugettext_lazy as _

from mapwidgets.widgets import GooglePointFieldWidget

from custom_user.admin import EmailUserAdmin
from .models import (
    PimpUser,
    CauseProfile,
    MarketerProfile,
    Qualification,
    Skill
)


class CauseProfileAdmin(admin.StackedInline):

    list_select_related = ['profile']
    model = CauseProfile


class MarketerProfileAdmin(admin.StackedInline):

    list_select_related = ['profile']
    model = MarketerProfile


class PimpUserAdmin(EmailUserAdmin):
    formfield_overrides = {
        models.PointField: {"widget": GooglePointFieldWidget}
    }

    inlines = [MarketerProfileAdmin, CauseProfileAdmin]

    fieldsets = (
        (None, {
            'fields': (
                'email', 'password', 'linkedin', 'twitter', 'name',
                'surname', 'cause_name', 'phone', 'country', 'city', 'postcode', 'position',
                'usertype', 'bio', 'website', 'image', 'featured', 'location'
            )
        }),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    list_display = ['name', 'surname', 'email', 'cause_name', 'usertype', 'date_joined',
                    'is_active']
    search_fields = ['name', 'email', 'position', 'cause_name']


# Register your models here.
admin.site.register(PimpUser, PimpUserAdmin)

admin.site.register(Qualification)
admin.site.register(Skill)
