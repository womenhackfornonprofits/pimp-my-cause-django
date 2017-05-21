from django.conf.urls import url

from profiles.views import (
    profile_edit,
    profile_detail,
)

urlpatterns = [
    url(
        r'^edit/$',
        profile_edit,
        name='profile_update'
    ),
    url(
        r'^(?P<user_id>\d+)/$',
        profile_detail,
        name='profile_detail'
    ),
]
