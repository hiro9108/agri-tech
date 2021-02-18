from django.contrib import admin
from . import models

@admin.register((models.User))
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register((models.Category))
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register((models.Tag))
class TagAdmin(admin.ModelAdmin):
    pass

@admin.register((models.Event))
class EventAdmin(admin.ModelAdmin):
    pass

@admin.register((models.Post))
class PostAdmin(admin.ModelAdmin):
    pass