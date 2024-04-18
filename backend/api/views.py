from django.shortcuts import render
from rest_framework.response import Response
from .serializers import userSerializers,MovieSerializers
from MovieData.models import Movie,users
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework import status

# Create your views here.

@api_view(['POST'])
def login(request):
    userlist = list(users.objects.all().values())
    d = {
        'username':request.data.get('username'),
        'password': request.data.get('password')
    }
    if d in userlist :
        return HttpResponse('valid credentials',status=200)
    else :
        return HttpResponse('Invalid credentials',status=401)

@api_view(['POST'])
def register(request):
    userlist = list(users.objects.all().values())
    new_user = {
        'username':request.data.get('username'),
        'password': request.data.get('password')
    }
    serializer = userSerializers(data=new_user)
    if serializer.is_valid() :

        usernames = [ d['username'] for d in userlist ]
        if new_user['username'] in usernames :
            return HttpResponse('username already taken,try other username.',status=409)
        else:
            users.objects.create(**serializer.validated_data)
            return HttpResponse('user created successfully.',status=200)
    else :
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_movies_data(request) :
    movies_info = Movie.objects.all()
    serializer = MovieSerializers(movies_info,many=True)
    return Response(serializer.data)
