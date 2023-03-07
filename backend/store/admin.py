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
    list_display = ['pk', 'name', 'store_img']
    list_display_links = ['name']

    def store_img(self, obj):
        img = obj.franchiseimges.first()
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")

    store_img.short_description = '이미지'
