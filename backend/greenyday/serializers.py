from rest_framework import serializers
from .models import Item_Img, Category, Event_Img, Item



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class ItemImgSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = Item_Img
        fields = ('name', 'photo')

class EventSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = Event_Img
        fields = ('name', 'photo')

class ItemSerializer(serializers.ModelSerializer):
    itemimges = ItemImgSerializer(many=True, read_only=True)
    class Meta:
        model = Item
        fields = ('pk', 'name', 'calorie', 'price', 'description', 'itemimges', 'category_id')
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['category'] = CategorySerializer(instance.category_id).data
        return response

class MainSerializer(serializers.ModelSerializer):
    itemimges = ItemImgSerializer(many=True, read_only=True)
    class Meta:
        model = Item
        fields = ('pk', 'name', 'calorie', 'price', 'description', 'itemimges', 'category_id')
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['category'] = CategorySerializer(instance.category_id).data
        return response