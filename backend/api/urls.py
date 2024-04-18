from django.urls import path
from . import  views
urlpatterns = [
    path('login/',views.login,name='Login'),
    path('register/',views.register,name="register"),
    path('moviesData/',views.get_movies_data,name='MovieData'),
]
