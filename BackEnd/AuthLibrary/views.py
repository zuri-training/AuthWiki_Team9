from .models import (Comment, AuthLibrary,
                     CodeSnippet)
from .serializers import (AuthLibrarySerializer,
                          CodeSnippetSerializer,
                          CommentSerializer)
from rest_framework import viewsets, generics


# Create your views here.

class AuthLibraryView(viewsets.ModelViewSet):
    serializer_class = AuthLibrarySerializer
    queryset = AuthLibrary.objects.all()


class CodeSnippetView(viewsets.ModelViewSet):
    serializer_class = CodeSnippetSerializer
    queryset = CodeSnippet.objects.all()


class CommentAPIView(generics.CreateAPIView):
    serializer_class = CommentSerializer

    def get_object(self):
        return Comment.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs['pk']
        comment_body = self.request.data.get('comment_body')
        auth_lib = AuthLibrary.objects.get(pk=pk)
        user = self.request.user
        print( comment_body, auth_lib)
        serializer.comment_body = comment_body
        serializer.save(author_name=user, auth_library=auth_lib)

    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }




