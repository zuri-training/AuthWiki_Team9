from pyexpat import model
from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"
        depth = 1



        def perform_create(self, serializer):
            serializer.save(author_name=self.request.user)

    
    