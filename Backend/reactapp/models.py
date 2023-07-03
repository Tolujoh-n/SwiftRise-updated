from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    wallet_address = models.CharField(max_length=255)

    # Add related_name argument to resolve clash with auth.User
    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')

