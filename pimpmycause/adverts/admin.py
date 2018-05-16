from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from adverts.models import Advert


class AdvertAdmin(admin.ModelAdmin):

    list_select_related = ['cause_profile']
    list_display = ['title', 'cause_profile', 'created_at', 'deadline']
    search_fields = ['description', 'title']

admin.site.register(Advert, AdvertAdmin)
