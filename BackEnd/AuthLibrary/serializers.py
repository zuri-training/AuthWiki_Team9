from rest_framework import serializers
from .models import AuthLibrary


class AuthLibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthLibrary
        fields = '__all__'
