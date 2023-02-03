from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import MainList

router = DefaultRouter()
router.register('item', views.ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('main/', MainList.as_view(), name='main_list'),
]
