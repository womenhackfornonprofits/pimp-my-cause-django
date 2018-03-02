from django.contrib import admin

from news.models import NewsPost


class NewsPostAdmin(admin.ModelAdmin):

    list_display = ['title', 'created_at', 'intro']


admin.site.register(NewsPost, NewsPostAdmin)
