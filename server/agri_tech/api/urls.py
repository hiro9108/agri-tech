from django.urls import path
from .views import apiOverview, createUser

urlpatterns = [
    path('', apiOverview, name="api-overview"),
    path('api/', createUser, name="createUser"),
]