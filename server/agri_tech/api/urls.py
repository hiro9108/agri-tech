from django.urls import path
from .views import(
    apiOverview,
    createUser, getUser, updateUser,
    createPost, getAllPosts,
    getAllCategories,
    getAllTags
) 

urlpatterns = [
    path('', apiOverview, name="api-overview"),
    path('posts/', createPost, name="createPost"),
    path('posts-list/', getAllPosts, name="postsList"),
    path('categories-list/', getAllCategories, name="categoriesList"),
    path('users/', createUser, name="createUser"),
    path('users-detail/<str:pk>/', getUser, name="getUser"),
    path('users/<str:pk>/', updateUser, name="updateUser"),
    path('tags-list/', getAllTags, name="tagsList"),
]