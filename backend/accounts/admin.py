from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'nickname']
    list_display_links = ['nickname']
    ordering = ['-id']