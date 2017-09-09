from django.conf.urls import url

from news.views import (
    news_post_detail,
    news_post_list,
)


urlpatterns = [
    url(
        r'^$',
        news_post_list,
        name='news_post_list'
    ),
    url(
        r'^(?P<slug>[-\w]+)/',
        news_post_detail,
        name='news_post_detail'
    )
]
