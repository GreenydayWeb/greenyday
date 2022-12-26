from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Item, Item_Img, Category

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'category_id', 'calorie', 'price', 'description']
    list_display_links = ['name']




@admin.register(Item_Img)
class ImgAdmin(admin.ModelAdmin):
    list_display = ['item_id', 'name', 'photo_tag']
    list_display_links = ['name']

    def photo_tag(self, img):
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']