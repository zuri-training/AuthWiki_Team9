from pyexpat import model
from rest_framework import serializers
from .models import (Comment, AuthLibrary,
                     CodeSnippet)


class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.StringRelatedField()

    class Meta:
        model = Comment
        exclude = ('auth_library',)
        extra_kwargs = {
            'author_name': {
                'required': False
            }
        }


class CodeSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeSnippet
        # fields = '__all__'
        exclude = ('auth_library',)


class AuthLibrarySerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    code_snippet = CodeSnippetSerializer(many=True, read_only=True)

    class Meta:
        model = AuthLibrary
        fields = '__all__'
