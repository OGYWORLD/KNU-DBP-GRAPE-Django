from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'userLevel',
            'name',
            'idid',
            'pw',
            'email',
            'addr',
            'musical',
            'date',
            'seat',
        )
        model = Post