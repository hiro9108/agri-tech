from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, PostSerializer, CategorySerializer, TagSerializer
from .models import User, Post, Category, Tag

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'User-List': '/users'
    }
    return Response(api_urls)

""" User views """

# @api_view(['GET'])
# def getAllUser(request):
#     users = User.objects.all()
#     serializer = UserSerializer(posts, many=True)
#     return Response(serializer.data)

@api_view(['GET'])
def getUser(request, pk):
    users = User.objects.get(id=pk)
    serializer = UserSerializer(users, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# @api_view(['POST'])
# def updateUser(request, pk):
#     users = User.objects.get(id=pk)
#     serializer = UserSerializer(instance=users, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

@api_view(['PATCH'])
def updateUser(request, pk):
    users = User.objects.get(id=pk)
    serializer = UserSerializer(instance=users, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteUser(request, pk):
#     users = User.objects.get(id=pk)
#     users.delete()
#     return Response("Successfully delete!")


""" Post views """

@api_view(['GET'])
def getAllPosts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createPost(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


""" Category views """

@api_view(['GET'])
def getAllCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


""" Tag views """

@api_view(['GET'])
def getAllTags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)