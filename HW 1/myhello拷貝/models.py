from django.db import models

# Create your models here.

from django.db import models 

# class Post(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField(blank=True)
#     photo = models.URLField(blank=True)
#     location = models.CharField(max_length=100)
#     created_at = models.DateTimeField(auto_now_add=True)


# class User(models.Model):
#     user_id = models.CharField(max_length=150)
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     last_login = models.DateTimeField(auto_now_add=True)
#     picture = models.CharField(max_length=2048)

class Post(models.Model):
    Department = models.TextField(blank=True)
    CourseTitle= models.TextField(blank=True)
    Instructor = models.TextField(blank=True)



