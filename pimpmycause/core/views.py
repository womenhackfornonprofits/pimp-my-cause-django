from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class HomepageView(TemplateView):
    """
    The Homepage View.
    """
    template_name = "index.html"


class ContactView(TemplateView):
    """
    The Contact Us View.
    """
    template_name = "core/contact.html"


class AboutView(TemplateView):
    """
    The About Us View.
    """
    template_name = "core/about.html"


class WhoWeAre(TemplateView):
    """
    The About Us View.
    """
    template_name = "core/who-we-are.html"



class HowItWorks(TemplateView):
    """
    The About Us View.
    """
    template_name = "core/how-it-works.html"



class MeetTheTeam(TemplateView):
    """
    Meet The Team View.
    """
    template_name = "core/team.html"

class Partnerships(TemplateView):
    """
    Meet The Team View.
    """
    template_name = "core/partnerships.html"

class OurPartners(TemplateView):
    """
    Meet The Team View.
    """
    template_name = "core/our-partners.html"

class BecomeAPartner(TemplateView):
    """
    Meet The Team View.
    """
    template_name = "core/become-a-partner.html"
