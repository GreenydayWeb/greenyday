from django.contrib.auth import get_user_model
from django.db import models

from greenyday.models import Item

# Create your models here.

User = get_user_model()
class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class MEta:
        abstract = True

class Franchise(TimestampedModel):
    name = models.CharField(max_length=50)
    description = models.TextField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Franchise_Img(TimestampedModel):
    franchise_id = models.OneToOneField(Franchise, related_name='franchiseimges', on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True)
    photo = models.ImageField(upload_to="greenyday/franchise/%Y/%m/%d")

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    payment_status = models.BooleanField(default=False)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.user} - {self.order_date}"


class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50)
    payment_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.order} - {self.payment_method} - {self.payment_amount}"

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.user} - {self.product} - {self.quantity}"
