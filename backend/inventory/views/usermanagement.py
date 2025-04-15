# from rest_framework import viewsets
# from .models import User
# from .serializers import UserSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer



# from rest_framework import viewsets 
# from inventory.models import User
# from inventory.serializers import UserSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# inventory/views/usermanage.py
# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel
# from typing import Optional
# from inventory.models import User  # Assuming you have this ORM model

# router = APIRouter()

# class UserCreate(BaseModel):
#     username: str
#     email: str
#     role: str
#     department: Optional[str]

# @router.post("/api/users/")
# async def create_user(user: UserCreate):
#     # Do your DB logic here (like inserting to PostgreSQL)
#     return {"message": "User created successfully", "user": user}


# from rest_framework import viewsets
# from inventory.models import User
# from inventory.serializers import UserSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     # Define the queryset (all users in the database)
#     queryset = User.objects.all()

#     # Specify the serializer class to be used
#     serializer_class = UserSerializer

# inventory/views/usermanagement.py

from rest_framework import viewsets
from ..models import User
from ..serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

