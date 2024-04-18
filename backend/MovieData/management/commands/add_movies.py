from ...models import Movie
import json
import django
import os
from django.core.management.base import BaseCommand

# set up Django environment
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# django.setup()
class Command(BaseCommand):
    help = 'Description of my custom command'

    def handle(self, *args, **options):
        # Code for your custom command goes here
        with open('C:/Users/Kunj/Desktop/Movie-Mania-CS108-Project/backend/MovieData/scrapped_movie_data.json', 'r') as f:
            movie_data = json.load(f)
        
        for movie in movie_data:
            Movie_instance = Movie(**movie)
            Movie_instance.save()
        self.stdout.write('My custom command executed successfully')


