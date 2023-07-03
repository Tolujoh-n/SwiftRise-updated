from django.shortcuts import render

# Create your views here.
# app_name/views.py

from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User

from django.contrib.auth import get_user_model, authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import UserSerializer

@api_view(['POST'])
def register(request):
    User = get_user_model()
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return JsonResponse({'success': 'User registered successfully'})
    else:
        return JsonResponse(serializer.errors, status=400)


@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'success': 'User logged in successfully'})
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=401)


@api_view(['GET'])
def user_logout(request):
    logout(request)
    return JsonResponse({'success': 'User logged out successfully'})
