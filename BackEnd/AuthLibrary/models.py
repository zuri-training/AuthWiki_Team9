from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
class CodeSnippet(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} || {str(self.id)}"


class AuthLibrary(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    # comment = models
    # code_snippets = models.OneToOneField(CodeSnippet, on_delete=models.CASCADE, default=None)
    no_of_downloads = models.PositiveIntegerField()
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Reaction(models.Model):
    upvote = models.IntegerField(default=0)
    down_vote = models.IntegerField(default=0)
    no_of_vote = models.PositiveIntegerField()

    def __str__(self):
        return f"{str(self.upvote)}"
