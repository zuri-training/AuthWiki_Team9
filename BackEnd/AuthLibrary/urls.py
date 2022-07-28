from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AuthLibraryView

routers = DefaultRouter()
routers.register('authlibrary', AuthLibraryView, basename='auth')
app_name = ''
urlpatterns = [
    path('', include(routers.urls))
]
