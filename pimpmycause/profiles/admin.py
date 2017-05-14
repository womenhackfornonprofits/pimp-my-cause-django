from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

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

    inlines = [MarketerProfileAdmin, CauseProfileAdmin]

    fieldsets = (
        (None, {'fields': ('email', 'password', 'linkedin', 'twitter', 'name',
                'surname', 'phone', 'country', 'city', 'postcode', 'position',
                'usertype', 'bio', 'website', 'image', 'featured')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    list_display = ['name', 'email', 'usertype', 'date_joined', 'is_active']
    search_fields = ['name', 'email', 'position']


# Register your models here.
admin.site.register(PimpUser, PimpUserAdmin)
admin.site.register(Qualification)
admin.site.register(Skill)
