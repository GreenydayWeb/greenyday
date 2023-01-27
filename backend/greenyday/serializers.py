from rest_framework import serializers
from .models import Item_Img


class ItemImageSerializer(serializers.HyperlinkedModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = Item_Img
        fields = ['photo']