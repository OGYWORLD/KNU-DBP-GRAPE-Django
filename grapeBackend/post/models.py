#backend/post/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    userLevel = models.FloatField(null=True, default=None)
    name = models.TextField(null=True,default='')
    idid = models.TextField(null=True,default='')
    pw = models.TextField(null=True,default='')
    email = models.TextField(null=True,default='')
    addr = models.TextField(null=True,default='')
    musical = models.TextField(null=True,default='')
    date = models.TextField(null=True,default='')
    seat = models.TextField(null=True,default='')

    def __str__(self):
        """A string representation of the model."""
        return self.title