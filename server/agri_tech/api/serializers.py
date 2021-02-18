from rest_framework import serializers
from .models import User, Post, Category, Tag

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    # tags = TagSerializer(many=True)
    # print(tags)
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'image', 'user', 'category', 'tags')
