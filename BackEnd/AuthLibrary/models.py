from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.



class AuthLibrary(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    # comment = models
    # code_snippets = models
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

class Comment(models.Model):
    author_Name = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    auth_package= models.ForeignKey(AuthLibrary, on_delete=models.CASCADE, related_name='comment')
    comment_body = models.TextField( blank=True, null=True)
    date_created = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    def __str__(self):
        return f"{str(self.author_Name)}"

class Category(models.Model):
    name = models.CharField(max_length=255, null=True)
    slug = models.SlugField(null=True)
    description = models.CharField(max_length=500, null=True,blank=True, verbose_name='Description')

    def __str__(self):
        return str(self.name)
