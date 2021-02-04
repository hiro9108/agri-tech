from django.db import models

# User model
class User(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=100, blank=False, null=False, unique=True)
    password = models.CharField(max_length=30, blank=False, null=False)
    avatar = models.CharField(max_length=200, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=False, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, blank=False, null=False, editable=False)

    def __str__(self):
        return self.first_name + "_" + self.last_name


# Category model
class Category(models.Model):
    category = models.CharField(max_length=100, blank=False, null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=False, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, blank=False, null=False, editable=False)

    def __str__(self):
        return self.category


# Tag model
class Tag(models.Model):
    tag = models.CharField(max_length=100, blank=False, null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=False, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, blank=False, null=False, editable=False)

    def __str__(self):
        return self.tag


# Event model
class Event(models.Model):
    place = models.CharField(max_length=100, blank=False, null=False)
    date = models.CharField(max_length=100, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=False, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, blank=False, null=False, editable=False)

    def __str__(self):
        return self.place


# Post model
class Post(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=255, blank=False, null=False)
    image = models.CharField(max_length=255, blank=False, null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=False, null=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, blank=False, null=False, editable=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    event = models.OneToOneField(Event, blank=True, null=True, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)
    likes = models.ManyToManyField(User, blank=True, related_name="likes")

    def __str__(self):
        return self.title




