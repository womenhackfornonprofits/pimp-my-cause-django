from django.urls import re_path

from profiles.views import (
    profile_edit,
    profile_detail,
)

urlpatterns = [
    re_path(
        r'^edit/$',
        profile_edit,
        name='profile_update'
    ),
    re_path(
        r'^(?P<user_id>\d+)/$',
        profile_detail,
        name='profile_detail'
    ),
]
