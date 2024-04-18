from models import Movie
import json
import django
import os
# set up Django environment
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# django.setup()
with open('scrapped_movie_data.json', 'r') as f:
    movie_data = json.load(f)
        
for movie in movie_data:
    Movie_instance = Movie(**movie)
    Movie_instance.save()

