from django.conf.urls import url

from adverts.views import (
    advert_form,
    advert_delete,
    advert_detail,
)


urlpatterns = [
    url(
        r'^add$',
        advert_form,
        name='advert_add'
    ),
    url(
        r'^(?P<advert_id>\d+)/edit/$',
        advert_form,
        name='advert_edit'
    ),
    url(
        r'^(?P<advert_id>\d+)/$',
        advert_detail,
        name='advert_detail'
    ),
    url(
        r'^(?P<advert_id>\d+)/delete/$',
        advert_delete,
        name='advert_delete'
    ),
]
