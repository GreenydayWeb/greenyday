from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # db에서 긁어올 것이 아니라서

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'], nickname=validated_data['nickname'], phone=validated_data['phone'])
        user.set_password(validated_data['password'])

        user.save()
        return user


    class Meta:
        model = User
        fields = ["pk", "email", "password", "nickname", "phone"]