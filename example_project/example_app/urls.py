from django.urls import path
from . import views

app_name = 'example_app'

urlpatterns = [
    path('', views.item_list, name='item_list'),
]
