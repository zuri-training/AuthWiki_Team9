from django.contrib import admin
from .models import AuthLibrary, Reaction, CodeSnippet

# Register your models here.

admin.site.register(CodeSnippet)
admin.site.register(AuthLibrary)
admin.site.register(Reaction)
