from datetime import datetime

from django.contrib.auth.decorators import login_required

from django.shortcuts import (
    get_object_or_404,
    redirect,
    render,
)

from profiles.models import PimpUser, CauseProfile
from adverts.forms import AdvertForm
import ipdb


@login_required
def advert_add(request):
    """Help wanted advert add new view"""

    cause_profile = get_object_or_404(
        CauseProfile,
        profile=request.user)

    if request.method == 'POST':
        advert_form = AdvertForm(
            request.POST
        )

        ipdb.set_trace()

        if advert_form.is_valid():
            advert = advert_form.save(commit=False)
            advert.cause_profile = cause_profile
            advert.created_at = datetime.now()
            ipdb.set_trace()
            advert.save()

    else:
        advert_form = AdvertForm()

    return render(request, 'adverts/advert_form.html', {
        'advert_form': advert_form,
    })
