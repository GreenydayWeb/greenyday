from django.contrib import admin
from django.utils.safestring import mark_safe

from store.models import Franchise, Cart, Order, Item, Payment, Franchise_Img


class ImageInline(admin.TabularInline):
    model = Franchise_Img
    fk_name = 'franchise_id'
    can_delete = False
@admin.register(Franchise)
class FranchiseAdmin(admin.ModelAdmin):
    inlines = (ImageInline,)
    list_display = ['pk', 'name']
    list_display_links = ['name']

    def get_franchise_img(self, obj):
        url = obj.franchise_img.image.url if obj.franchise_img else None
        return mark_safe(f"<img src={url} style='width: 100px;' />")

    get_franchise_img.short_description = '이미지'
