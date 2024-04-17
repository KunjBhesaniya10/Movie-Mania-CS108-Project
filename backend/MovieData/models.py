from django.db import models
# Create your models here.
class users(models.Model):
    username= models.CharField(primary_key=True,max_length=20)
    password = models.CharField(max_length=10)
    def __str__(self) -> str:
        return self.username
    class Meta:
        verbose_name_plural = 'users'
