from rest_framework import serializers

from .models import AuthLibrary, CodeSnippet, Comment, DownVote, UpVote


class UpVoteSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = UpVote
        exclude = ("comment",)


class DownVoteSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = DownVote
        exclude = ("comment",)


class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.StringRelatedField()
    upvote_user = UpVoteSerializer(many=True, read_only=True)
    downvote_user = DownVoteSerializer(many=True, read_only=True)

    class Meta:
        model = Comment
        exclude = ("auth_library",)
        extra_kwargs = {"author_name": {"required": False}}


class CodeSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeSnippet
        exclude = ("auth_library",)


class AuthLibrarySerializer(serializers.ModelSerializer):
    comment = CommentSerializer(many=True, read_only=True)
    code_snippet = CodeSnippetSerializer(many=True, read_only=True)
    created_by = serializers.StringRelatedField()

    class Meta:
        model = AuthLibrary
        fields = "__all__"
