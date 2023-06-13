from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin, AbstractUser)


# User Model for authentication




class User(AbstractUser):



    def __str__(self):
        return self.email
