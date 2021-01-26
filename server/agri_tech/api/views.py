from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': 'posts/list'
    }
    return Response(api_urls)

@api_view(['POST'])
def createUser(request):
    print(request.data)
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)