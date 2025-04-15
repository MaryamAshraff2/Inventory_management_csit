# from rest_framework import serializers
# from .models import User, Department

# class DepartmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Department
#         fields = '__all__'

# class UserSerializer(serializers.ModelSerializer):
#     department_name = serializers.ReadOnlyField(source='department.department_name')

#     class Meta:
#         model = User
#         fields = ['id', 'name', 'email', 'role', 'created_at', 'department', 'department_name']


# from rest_framework import serializers
# from .models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'

# from rest_framework import serializers
# # from .models import User
# from inventory.models import User  

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'

# from rest_framework import serializers
# from .models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['name', 'email', 'role', 'department']


from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'



