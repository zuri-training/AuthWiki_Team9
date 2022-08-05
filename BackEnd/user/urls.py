from django.urls import path

from .views import CreateAuthToken, UserCreateAPIView, UserRetrieveUpdateAPIView

urlpatterns = [
    path("register", UserCreateAPIView.as_view(), name="create-user"),
    path("login", CreateAuthToken.as_view(), name="create-token"),
    path("", UserRetrieveUpdateAPIView.as_view(), name="user-edit"),
]
