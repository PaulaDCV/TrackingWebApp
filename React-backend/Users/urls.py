from django.urls import path, include
from . import views

urlpatterns = [
    path('api/users/', views.UserListCreate.as_view()),
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path("accounts/",include("allauth.urls"))
]
