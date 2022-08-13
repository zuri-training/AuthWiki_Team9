from rest_framework import generics, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from .models import AuthLibrary, CodeSnippet, Comment, DownVote, UpVote
from .serializers import (
    AuthLibrarySerializer,
    CodeSnippetSerializer,
    CommentSerializer,
    DownVoteSerializer,
    UpVoteSerializer,
)

# Create your views here.


class AuthLibraryView(viewsets.ModelViewSet):
    serializer_class = AuthLibrarySerializer
    queryset = AuthLibrary.objects.all()
    # authentication_classes = [TokenAuthentication]

    # def get_permissions(self):
    #     if self.action == "list":
    #         self.permission_classes = []
    #     else:
    #         self.permission_classes = [IsAdminUser]
    #     return super(self.__class__, self).get_permissions()

    def perform_create(self, serializer):
        serializer.save(**self.request.data, created_by=self.request.user)


class CodeSnippetView(viewsets.ModelViewSet):
    serializer_class = CodeSnippetSerializer
    queryset = CodeSnippet.objects.all()
    authentication_classes = [TokenAuthentication]


class DownVoteAPIView(generics.CreateAPIView):
    serializer_class = DownVoteSerializer
    queryset = DownVote.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        pk = self.kwargs["pk"]
        comment = Comment.objects.get(pk=pk)
        review_user = self.request.user
        upvote_queryset = UpVote.objects.filter(comment=comment, user=review_user)
        downvote_queryset = DownVote.objects.filter(comment=comment, user=review_user)
        if downvote_queryset.exists():
            raise ValidationError("You have already downvote this comment")
        if upvote_queryset.exists():
            upvote_queryset.delete()
        serializer.save(
            comment=comment,
            user=review_user,
        )


class UpVoteAPIView(generics.CreateAPIView):
    serializer_class = UpVoteSerializer
    queryset = UpVote.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        pk = self.kwargs["pk"]
        comment = Comment.objects.get(pk=pk)
        review_user = self.request.user
        upvote_queryset = UpVote.objects.filter(comment=comment, user=review_user)
        downvote_queryset = DownVote.objects.filter(comment=comment, user=review_user)
        if upvote_queryset.exists():
            raise ValidationError("You have already upvote this comment")
        if downvote_queryset.exists():
            downvote_queryset.delete()
        serializer.save(
            comment=comment,
            user=review_user,
        )


class CommentAPIView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Comment.objects.all()

    def get_object(self):
        return Comment.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs["pk"]
        auth_lib = AuthLibrary.objects.get(pk=pk)
        user = self.request.user
        serializer.save(**self.request.data, author_name=user, auth_library=auth_lib)


class CodeSnippetAPIView(generics.CreateAPIView):
    serializer_class = CodeSnippetSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminUser]

    def get_object(self):
        return CodeSnippet.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs["pk"]
        auth_lib = AuthLibrary.objects.get(pk=pk)
        serializer.save(**self.request.data, auth_library=auth_lib)
