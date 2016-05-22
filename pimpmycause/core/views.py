from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class HomepageView(TemplateView):
    """
    The Homepage view.
    """
    template_name = "index.html"