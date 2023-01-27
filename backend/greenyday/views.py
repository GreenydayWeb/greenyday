from django.shortcuts import render
from rest_framework.permissions import AllowAny
from .models import Item, Category, Item_Img
from .serializers import ItemImageSerializer
from django.http import JsonResponse
from rest_framework import status, generics


class ItemList(generics.ListAPIView):
    permission_classes = [AllowAny]

    def get(self, request):
        item = Item.objects.all()
        items = []
        for i in item:
            category = Category.objects.get(pk=i.category_id)
            image = Item_Img.objects.filter(item_id=i.pk)
            images = []
            for img in image:
                images.append(img.photo.url)
            items.append({
                'category' : category.name,
                'name' : i.name,
                'calorie' : i.calorie,
                'price' : i.price,
                'description' : i.description,
                'image' : images
            })
        print(items)
        return JsonResponse({'items' : items}, status=status.HTTP_200_OK)