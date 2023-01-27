from django.urls import path, include
from . import views
from .views import ItemList

urlpatterns = [
    path('items/', ItemList.as_view(), name='item_list'),
]
