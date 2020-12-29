from django.urls import include, path
from . import views

urlpatterns = [
  path('usb-list', views.usbList),
]