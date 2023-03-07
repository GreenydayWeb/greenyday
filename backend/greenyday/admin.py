from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Item, Item_Img, Category, Event_Img, Nutrition, Ingredient


class ImageInline(admin.TabularInline):
    model = Item_Img
    fk_name = 'item_id'
    can_delete = False

class NutritionInline(admin.TabularInline):
    model = Nutrition
    fk_name = 'item_id'
    can_delete = False

class IngredientInline(admin.TabularInline):
    model = Ingredient
    fk_name = 'item_id'
    can_delete = False
@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    inlines = (NutritionInline, IngredientInline, ImageInline)

    list_display = ['id', 'name', 'category_id', 'get_item_img']
    list_display_links = ['name']

    def get_item_img(self, obj):
        img = obj.item_img_set.first()
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")



@admin.register(Event_Img)
class EventAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'photo_tag']
    list_display_links = ['name']

    def photo_tag(self, img):
        return mark_safe(f"<img src={img.photo.url} style='width: 100px;' />")

