from django.db import models



class Product(models.Model):
    class Category(models.TextChoices):
        ELECTRONIC = 'ELECTRONIC'
        FOOD = 'FOOD'
        CLOTHING = 'CLOTHING'
    
    class Status(models.TextChoices):
        ACTIVE = 'ACTIVE'
        INACTIVE = 'INACTIVE'
        DRAFT = 'DRAFT'

    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    price = models.FloatField(default=0.0)
    status = models.TextField(default=Status.ACTIVE, choices=Status.choices)
    category = models.TextField(choices=Category.choices)
