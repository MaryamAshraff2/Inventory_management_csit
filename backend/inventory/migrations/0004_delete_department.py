# Generated by Django 5.1.7 on 2025-04-14 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0003_remove_user_created_at_alter_user_department_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Department',
        ),
    ]
