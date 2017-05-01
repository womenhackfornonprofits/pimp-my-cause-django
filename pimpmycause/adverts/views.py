from django.contrib.auth.decorators import login_required

from django.shortcuts import (
    get_object_or_404,
    redirect,
    render,
)

from profiles.models import PimpUser
from adverts.forms import AdvertForm


@login_required
def advert_add(request, cause_id):
    """Help wanted advert add new view"""
    cause = get_object_or_404(PimpUser, id=cause_id)

    if request.method == 'POST':
        advert_form = AdvertForm(
            request.POST,
            instance=cause
        )

        if advert_form.is_valid():
            advert_form.save(commit=False)
            advert_form.cause_profile = cause.id

            return redirect(
                'profile_update'
            )
    else:
        advert_form = AdvertForm(instance=cause)

    return render(request, 'adverts/advert_form.html', {
        'advert_form': advert_form,
    })
    return
