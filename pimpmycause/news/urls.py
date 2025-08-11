from django.urls import re_path

from news.views import (
    news_post_detail,
    news_post_list,
)


urlpatterns = [
    re_path(
        r'^$',
        news_post_list,
        name='news_post_list'
    ),
    re_path(
        r'^(?P<slug>[-\w]+)/',
        news_post_detail,
        name='news_post_detail'
    )
]
