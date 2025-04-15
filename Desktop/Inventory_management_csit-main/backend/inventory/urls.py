# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import UserViewSet, DepartmentViewSet

# router = DefaultRouter()
# router.register(r'users', UserViewSet)
# router.register(r'departments', DepartmentViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
    
# ]

# from django.urls import path
# from .views import login

# urlpatterns = [
#     path('login/', login),
# ]


# from django.urls import path
# from .views.login import login_api   # update this import

# urlpatterns = [
#     path('login/', login_api),  # use the correct view name
# ]


# from django.urls import path
# from .views.login import login_api
# from rest_framework.routers import DefaultRouter
# from inventory.views.usermanagement import UserViewSet

# router = DefaultRouter()
# router.register(r'users', UserViewSet)

# urlpatterns = [
#     path('login/', login_api),  # this becomes /inventory/login/
    
#      path('usermanagement/', UserViewSet),
# ]


# inventory/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.usermanagement import UserViewSet
from .views.login import login_api

router = DefaultRouter()
router.register(r'usermanagement', UserViewSet, basename='usermanagement')

urlpatterns = [
    path('login/', login_api, name='login'),
    path('', include(router.urls)),
]


