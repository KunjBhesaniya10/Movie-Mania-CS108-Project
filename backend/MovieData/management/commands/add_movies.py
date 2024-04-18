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
        def add_data():

            with open('C:/Users/Kunj/Desktop/Movie-Mania-CS108-Project/backend/MovieMania/scrapped_movie_data.json', 'r') as f:
                movie_data = json.load(f)
        
            for movie in movie_data:
                Movie_instance = Movie(**movie)
                Movie_instance.save()
            self.stdout.write('data added successfully')

        def update_data():

            all_data = Movie.objects.all()
            for data in all_data :
                data.year_of_release = data.year_of_release[1:-1]
                data.save()
            self.stdout.write('updated data successfully')
        update_data()

