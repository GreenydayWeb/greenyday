# Generated by Django 4.1.4 on 2022-12-13 18:21

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TimestampedModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('timestampedmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='greenyday.timestampedmodel')),
                ('photo', models.ImageField(upload_to='greenyday/menu/%Y/%m/%d')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('caption', models.CharField(max_length=500)),
            ],
            bases=('greenyday.timestampedmodel',),
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('timestampedmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='greenyday.timestampedmodel')),
                ('photo', models.ImageField(upload_to='greenyday/review/%Y/%m/%d')),
                ('score', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('title', models.CharField(max_length=100)),
                ('caption', models.CharField(max_length=500)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('menu_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='greenyday.menu')),
            ],
            bases=('greenyday.timestampedmodel',),
        ),
    ]
