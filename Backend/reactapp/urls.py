# app_name/urls.py

from django.urls import path
from .views import TaskListAPIView

urlpatterns = [
    path('api/tasks/', TaskListAPIView.as_view(), name='task-list'),
]
