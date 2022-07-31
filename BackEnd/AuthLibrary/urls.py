from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (AuthLibraryView, CommentAPIView,
                    CodeSnippetAPIView)

routers = DefaultRouter()
routers.register('authlibrary', AuthLibraryView, basename='auth')
app_name = ''

urlpatterns = [
    path('', include(routers.urls)),
    path('<int:pk>/create_comment', CommentAPIView.as_view(), name='create-comment'),
    path('<int:pk>/create_code_snippet', CodeSnippetAPIView.as_view(), name='create-code-snippet'),
]
