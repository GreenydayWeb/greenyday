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
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = Event_Img
        fields = '__all__'

class ItemCreateSerializer(serializers.ModelSerializer):
    itemimges = ItemImgSerializer(many=True)
    class Meta:
        model = Item
        fields = '__all__'

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['category'] = CategorySerializer(instance.category_id).data
        return response

    def create(self, validated_data):
        print(validated_data)
        itemimges = validated_data.pop('itemimges')
        item_instance = Item.objects.create(**validated_data)
        for img in itemimges:
            Item_Img.objects.create(item_id = item_instance, **img)
        return item_instance



class ItemSerializer(serializers.ModelSerializer):
    itemimges = ItemImgSerializer(many=True, read_only=True)
    class Meta:
        model = Item
        fields = ('pk', 'name', 'calorie', 'price', 'description', 'itemimges')
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['category'] = CategorySerializer(instance.category_id).data
        return response
