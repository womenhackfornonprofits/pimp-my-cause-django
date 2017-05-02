from django.contrib.auth.decorators import login_required

from django.shortcuts import (
    get_object_or_404,
    redirect,
    render,
)

from profiles.models import PimpUser
from adverts.forms import AdvertForm
import ipdb


@login_required
def advert_add(request, user_id):
    """Help wanted advert add new view"""
    user = get_object_or_404(
        PimpUser,
        id=user_id,
    )

    if request.method == 'POST' and user.usertype == PimpUser.CAUSE:
        advert_form = AdvertForm(
            request.POST,
            instance=user.causeprofile
        )

        if advert_form.is_valid():
            advert = advert_form.save(commit=False)
            advert.cause_profile = user.causeprofile
            advert.save()

    else:
        advert_form = AdvertForm(instance=user.causeprofile)

    return render(request, 'adverts/advert_form.html', {
        'advert_form': advert_form,
    })
