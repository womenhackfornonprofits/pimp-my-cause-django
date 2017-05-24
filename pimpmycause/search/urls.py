from django.conf.urls import url

from search.views import (
    marketer_list,
    cause_list,
)


urlpatterns = [
    url(
        r'^marketer/$',
        marketer_list,
        name='search_marketer'
    ),
    url(
        r'^cause/$',
        cause_list,
        name='search_cause'
    ),
]
