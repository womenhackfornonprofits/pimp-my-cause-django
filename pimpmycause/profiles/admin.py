from django.contrib import admin
#from django.contrib.gis import admin
#from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _

#from mapwidgets.widgets import GoogleMapPointFieldWidget

from custom_user.admin import EmailUserAdmin
from .models import (
    PimpUser,
    CauseProfile,
    MarketerProfile,
    Qualification,
    Skill
)


class CauseProfileModelAdmin(admin.ModelAdmin):

    model = CauseProfile
    list_display = ['profile', 'mission', 'category']


class CauseProfileAdmin(admin.StackedInline):

    list_select_related = ['profile']
    model = CauseProfile


class MarketerProfileAdmin(admin.StackedInline):

    list_select_related = ['profile']
    model = MarketerProfile


class PimpUserAdmin(EmailUserAdmin):
    #formfield_overrides = {
    #    models.PointField: {"widget": GoogleMapPointFieldWidget}
    #}

    inlines = [MarketerProfileAdmin, CauseProfileAdmin]

    fieldsets = (
        (None, {
            'fields': (
                'email', 'password', 'linkedin', 'twitter', 'name',
                'surname', 'cause_name', 'phone', 'country', 'city', 'postcode', 'position',
                'usertype', 'bio', 'website', 'image', 'featured', 'geo_data',
                #'location',
            )
        }),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    list_display = ['name', 'surname', 'email', 'cause_name', 'usertype', 'date_joined',
                    'is_active', 'country', 'postcode', 'last_login']
                    #'location',
    list_filter = ('usertype', 'is_active', 'last_login')
    readonly_fields=('has_reactivated',)
    search_fields = ['name', 'email', 'position', 'cause_name']
    ordering = ('-date_joined',)


class QualificationAdmin(admin.ModelAdmin):
    list_display = ['marketer', 'description', 'name']
    search_fields = ['description', 'name']
    raw_id_fields = ('marketer', )


# Register your models here.
admin.site.register(PimpUser, PimpUserAdmin)
admin.site.register(Qualification, QualificationAdmin)
admin.site.register(Skill)
admin.site.register(CauseProfile, CauseProfileModelAdmin)
