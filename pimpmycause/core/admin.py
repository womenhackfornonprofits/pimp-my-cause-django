from django.contrib import admin

from core.models import TeamMember


class TeamMemberAdmin(admin.ModelAdmin):

    list_display = ['name', 'surname', 'position', 'visual_priority', 'group']


admin.site.register(TeamMember, TeamMemberAdmin)
