from django.core.paginator import (
    Paginator,
    EmptyPage,
    PageNotAnInteger
)
from django.shortcuts import (
    get_object_or_404,
    render,
)

from news.models import NewsPost


def news_post_detail(request, slug):
    news_post = get_object_or_404(
        NewsPost,
        slug=slug,
    )

    context = {'news_post': news_post}

    return render(request, 'news/news_post_detail.html', context)


def news_post_list(request):
    news_post_list = (
        NewsPost.objects.all()
        .order_by('-created_at')
    )
    page = request.GET.get('page')

    paginator = Paginator(news_post_list, 25)
    try:
        news_post_list_paginated = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        news_post_list_paginated = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        news_post_list_paginated = paginator.page(paginator.num_pages)

    # page = request.GET.get('page')
    # news_post_list_paginated = paginator.get_page(page)
    context = {'news_post_list': news_post_list_paginated}

    return render(request, 'news/news_post_list.html', context)
