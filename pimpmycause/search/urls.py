from django.urls import re_path

from search.views import (
    marketer_list,
    cause_list,
    ads_list,
)


urlpatterns = [
    re_path(
        r'^marketer/$',
        marketer_list,
        name='search_marketer'
    ),
    re_path(
        r'^cause/$',
        cause_list,
        name='search_cause'
    ),
    re_path(
        r'^help-wanted-ads/$',
        ads_list,
        name='search_ads'
    ),
]
