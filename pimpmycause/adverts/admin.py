from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from models import Advert


class AdvertAdmin(admin.ModelAdmin):

    list_select_related = ['cause_profile']
    list_display = ['title', 'cause_profile', 'created_at']


admin.site.register(Advert, AdvertAdmin)
