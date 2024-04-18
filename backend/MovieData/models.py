from django.db import models
# Create your models here.
class users(models.Model):
    username= models.CharField(primary_key=True,max_length=20)
    password = models.CharField(max_length=10)
    def __str__(self) -> str:
        return self.username
    class Meta:
        verbose_name_plural = 'users'


class Movie(models.Model):
    title = models.CharField(primary_key = True,max_length=100)
    year_of_release = models.CharField(max_length = 10)
    duration = models.CharField(max_length=20)
    director = models.CharField(max_length=50)
    main_cast = models.CharField(max_length = 100)
    movie_poster = models.CharField(max_length = 200)
    summary = models.CharField(max_length = 500)
    genre = models.CharField(max_length = 50)
    IMDB_rating = models.CharField(max_length=5)
    
    def __str__(self):
        return self.title
    class Meta :
        verbose_name_plural = 'Movies'


