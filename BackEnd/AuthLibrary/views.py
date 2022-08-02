from .models import (Comment, AuthLibrary,
                     CodeSnippet)
from .serializers import (AuthLibrarySerializer,
                          CodeSnippetSerializer,
                          CommentSerializer)
from rest_framework import viewsets, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# Create your views here.

class AuthLibraryView(viewsets.ModelViewSet):
    serializer_class = AuthLibrarySerializer
    queryset = AuthLibrary.objects.all()
    authentication_classes = [TokenAuthentication]

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = [IsAdminUser]
        return super(self.__class__, self).get_permissions()

    def perform_create(self, serializer):
        serializer.save(**self.request.data,
                        created_by=self.request.user)


class CodeSnippetView(viewsets.ModelViewSet):
    serializer_class = CodeSnippetSerializer
    queryset = CodeSnippet.objects.all()
    authentication_classes = [TokenAuthentication]


class CommentAPIView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return Comment.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs['pk']
        comment_body = self.request.data.get('comment_body')
        auth_lib = AuthLibrary.objects.get(pk=pk)
        user = self.request.user
        serializer.comment_body = comment_body
        serializer.save(author_name=user, auth_library=auth_lib)


class CodeSnippetAPIView(generics.CreateAPIView):
    serializer_class = CodeSnippetSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = []

    def get_object(self):
        return CodeSnippet.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs['pk']
        title = self.request.data.get('title')
        description = self.request.data.get('description')
        auth_lib = AuthLibrary.objects.get(pk=pk)
        serializer.title = title
        serializer.description = description
        serializer.save(auth_library=auth_lib)
