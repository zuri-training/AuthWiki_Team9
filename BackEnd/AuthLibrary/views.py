from .models import AuthLibrary
from .serializers import AuthLibrarySerializer
from rest_framework import viewsets


# Create your views here.

class AuthLibraryView(viewsets.ModelViewSet):
    serializer_class = AuthLibrarySerializer
    queryset = AuthLibrary.objects.all()
