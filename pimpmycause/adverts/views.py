from datetime import datetime

from django.contrib.auth.decorators import login_required
from django.utils.http import is_safe_url

from django.shortcuts import (
    get_object_or_404,
    redirect,
    render,
)

from profiles.models import CauseProfile
from adverts.forms import AdvertForm
from adverts.models import Advert


@login_required
def advert_form(request, advert_id=None):
    """Help wanted advert add/edit"""
    if advert_id:
        advert = get_object_or_404(
            Advert,
            id=advert_id,
        )
    else:
        advert = None

    if request.method == 'POST':

        cause_profile = get_object_or_404(
            CauseProfile,
            profile=request.user
        )

        advert_form = AdvertForm(
            request.POST,
            instance=advert
        )

        if advert_form.is_valid():
            advert = advert_form.save(commit=False)
            advert.cause_profile = cause_profile
            advert.created_at = datetime.now()
            advert.save()
            advert_form.save_m2m()

            return redirect('profile_detail', user_id=request.user.id)

    else:
        advert_form = AdvertForm(instance=advert)

    return render(request, 'adverts/advert_form.html', {
        'advert_form': advert_form,
    })


def advert_detail(request, advert_id):
    """Help wanted advert add/edit"""
    advert = get_object_or_404(
        Advert,
        id=advert_id,
    )

    context = {'advert': advert}

    return render(request, 'adverts/advert_detail.html', context)


@login_required
def advert_delete(request, advert_id):
    """Delete a given Help Wanted Ad"""
    advert = get_object_or_404(
        Advert,
        id=advert_id,
    )
    advert.delete()

    next_url = request.POST.get('next')

    if next_url and is_safe_url(next_url):
        return redirect(next_url)
    else:
        return redirect('profile_detail', user_id=request.user.id)
