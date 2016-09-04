from django.contrib import admin
from custom_user.admin import EmailUserAdmin
from .models import PimpUser
from django.utils.translation import ugettext_lazy as _


class PimpUserAdmin(EmailUserAdmin):
    """
    You can customize the interface of your model here.
    """

    fieldsets = (
	        (None, {'fields': ('email', 'password', 'linkedin', 'twitter', 'name', 
	        	'surname', 'phone', 'country', 'city', 'postcode', 'position', 'usertype',
	        	'qualifications', 'experience', 'bio', 'website', 'image')}),
	        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
	                                       'groups', 'user_permissions')}),
	        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
	    )

# Register your models here.
admin.site.register(PimpUser, PimpUserAdmin)
