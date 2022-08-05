from rest_framework import authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from rest_framework.settings import api_settings
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .serializers import AuthTokenSerializer, UserSerializer

# Create your views here.


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserSerializer


class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):

        return self.request.user


class CreateAuthToken(ObtainAuthToken):
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'email': user.email,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'username': user.username
        })
