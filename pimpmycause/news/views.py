from django.shortcuts import (
    get_object_or_404,
    render,
)

# from news.forms import NewsPostForm
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
        NewsPost.objects
        .order_by('created_at')
    )

    context = {'news_post_list': news_post_list}

    return render(request, 'news/news_post_list.html', context)

