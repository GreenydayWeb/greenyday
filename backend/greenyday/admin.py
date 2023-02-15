from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Item, Item_Img, Category, Event_Img, Nutrition, Ingredient


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category_id', 'calorie', 'price', 'description']
    list_display_links = ['name']




@admin.register(Item_Img)
class ImgAdmin(admin.ModelAdmin):
    list_display = ['id', 'item_id', 'name', 'photo_tag']
    list_display_links = ['name']

    def photo_tag(self, img):
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_display_links = ['id', 'name']

@admin.register(Event_Img)
class EventAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'photo_tag']
    list_display_links = ['name']

    def photo_tag(self, img):
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")

@admin.register(Nutrition)
class NutAdmin(admin.ModelAdmin):
    list_display = ['id', 'item_id', 'protein', 'carbohydrate', 'fat']
    list_display_links = ['item_id']

@admin.register(Ingredient)
class IngAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_display_links = ['id', 'name']

