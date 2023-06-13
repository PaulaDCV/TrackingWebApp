from django.shortcuts import render
from rest_framework import generics
# Create your views here.

from .models import User
from .serializers import UserSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class= UserSerializer
