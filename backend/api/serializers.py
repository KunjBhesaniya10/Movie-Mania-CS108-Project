from rest_framework import serializers
from MovieData.models import users,Movie

class userSerializers(serializers.ModelSerializer):
    class Meta :
        model = users
        fields = '__all__'
    def register_user(self,valid_data) :
        return users.objects.create(**valid_data)
    
class MovieSerializers(serializers.ModelSerializer):
    class Meta :
        model = Movie
        fields ='__all__'
    