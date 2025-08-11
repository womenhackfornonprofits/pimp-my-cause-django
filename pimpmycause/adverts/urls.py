from django.urls import re_path

from adverts.views import (
    advert_form,
    advert_delete,
    advert_detail,
)


urlpatterns = [
    re_path(
        r'^add$',
        advert_form,
        name='advert_add'
    ),
    re_path(
        r'^(?P<advert_id>\d+)/edit/$',
        advert_form,
        name='advert_edit'
    ),
    re_path(
        r'^(?P<advert_id>\d+)/$',
        advert_detail,
        name='advert_detail'
    ),
    re_path(
        r'^(?P<advert_id>\d+)/delete/$',
        advert_delete,
        name='advert_delete'
    ),
]
