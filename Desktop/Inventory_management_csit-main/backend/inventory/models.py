# from django.db import models

# class Department(models.Model):
#     department_name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.department_name

# class User(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     role = models.CharField(max_length=50)
#     created_at = models.DateTimeField(auto_now_add=True)
#     department = models.ForeignKey(Department, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.name
# from django.db import models

# class Department(models.Model):
#     department_name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.department_name

# class User(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     role = models.CharField(max_length=50)
#     created_at = models.DateTimeField(auto_now_add=True)
#     department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)

#     def __str__(self):
#         return self.name


# from django.db import models



# class User(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     role = models.CharField(max_length=20)
#     department = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name

# class Department(models.Model):
#     department_name = models.CharField(max_length=100)

#     def __str__(self):
#        return self.department_name

from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20)
    department = models.CharField(max_length=100)

    def __str__(self):
        return self.name

