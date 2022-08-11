from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    AuthLibraryView,
    CodeSnippetAPIView,
    CommentAPIView,
    DownVoteAPIView,
    UpVoteAPIView,
)

routers = DefaultRouter()
routers.register("authlibrary", AuthLibraryView, basename="auth")
app_name = ""

urlpatterns = [
    path("", include(routers.urls)),
    path("<int:pk>/create_comment", CommentAPIView.as_view(), name="create-comment"),
    path("comment/<int:pk>/create_upvote", UpVoteAPIView.as_view(), name="create-upvote"),
    path("comment/<int:pk>/create_downvote", DownVoteAPIView.as_view(), name="create-downvote"),
    path(
        "<int:pk>/create_code_snippet",
        CodeSnippetAPIView.as_view(),
        name="create-code-snippet",
    ),
]
